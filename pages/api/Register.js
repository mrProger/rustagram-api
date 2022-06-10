import { NextApiRequest, NextApiResponse } from 'next';
import nextSession from "next-session";
export const getSession = nextSession();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const md5 = require('md5');

export default async function Register(req, res) {
    if (req.method === 'POST') {
        if (!req.body['login'] || !req.body['password']) {
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

            res.status(200).send(session.user);
        } catch (error) {
            res.status(403).send(error);
        }
    } else {
        res.status(404).send('Поддерживается только POST метод');
    }
}