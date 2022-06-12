import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';
import nextSession from "next-session";
export const getSession = nextSession();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const md5 = require('md5');

const cors = Cors({
    methods: ['GET', 'HEAD', 'POST'],
});

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }

            return resolve(result);
        });
    });
}

export default async function Auth (req, res) {
    await runMiddleware(req, res, cors);

    if (req.method === 'POST') {
        if (!req.body['login'] || !req.body['password']) {
            res.status(403).send('Not found login or password');
            return;
        }

        try {
            let user = await prisma.account.findFirst({
                where: {
                    login: { contains: req.body['login'] },
                    password: { contains: md5(req.body['password']) },
                },
            });

            const session = await getSession(req, res);
            session.user = user != null ? user : "Incorrect login or password";
            await session.commit();

            res.status(200).send(session.user);
        } catch (error) {
            res.status(403).send(error.message);
        }
    } else {
        res.status(404).send('\n' + 'Supports only POST method');
    }
}