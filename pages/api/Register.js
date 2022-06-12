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

export default async function Register(req, res) {
    await runMiddleware(req, res, cors);

    if (req.method === 'POST') {
        if (!req.body['login'] && !req.body['password']) {
            res.status(403).send('Not found login or password');
            return;
        }

        try {
            let user = await prisma.account.create({
                data: {
                    login: req.body['login'],
                    password: md5(req.body['password']),
                },
            });

            const session = await getSession(req, res);
            session.user = user;
            await session.commit();

            res.status(200).send('true');
        } catch (error) {
            res.status(403).send(error);
        }
    } else {
        res.status(404).send('Supports only POST method');
    }
}