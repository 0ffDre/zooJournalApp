import { Request, RequestHandler, Response } from "express";
import { User } from './users.model';
import * as UserDao from './users.dao';
import { OkPacket } from 'mysql';

export const readUsers: RequestHandler = async (req: Request, res: Response) => {
    try {
        let users;
        let usersId = (req.query.usersId as string);
        console.log('usersId', usersId);
        if (!(usersId)) {
            console.log('in NAN')
            users = await UserDao.readUsers();
        } else {

            users = await UserDao.readUsersByUserId(usersId);
        };

        res.status(200).json(
            users
        );
    } catch (error) {
        console.error('[user.controller][ReadUsers][Error]', error);
        res.status(500).json({
            message: "There was an error when fetching users"
        });
    }
};

export const createUser: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await UserDao.createUser(req.body);

        console.log('req.body', req.body);
        console.log('user', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[users.controller][createUser][Error]', error);
        res.status(500).json({
            message: 'There was an error when writing users'
        });
    }
};

export const updateUser: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await UserDao.updateUser(req.body);

        console.log('req.body');
        console.log('user', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[users.controller][updateUser][Error]', error);
        res.status(500).json({
            message: 'There was an error when updating users'
        });
    }
};

export const deleteUser: RequestHandler = async (req: Request, res: Response) => {
    try {
        let userId = parseInt(req.params.userId as string);

        console.log('usersId', userId);
        if (!Number.isNaN(userId)) {
            const response = await UserDao.deleteUser(userId);

            res.status(200).json(
                response
            );
        } else {
            throw new Error("Integer expected for userId");
        }
    } catch (error) {
        console.error('[users.controller][deleteUser][Error]', error);
        res.status(500).json({
            message: 'There was an error when deleting user'
        });
    }
};

export const readUserByFullName: RequestHandler = async (req: Request, res: Response) => {
    try {
        const users = await UserDao.readUserByFullName(req.params.fullName);
        console.log(req.params)
        res.status(200).json(
            users
        );
    } catch (error) {
        console.error('[users.controller][readUsers][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching users'
        });
    }
};

export const readUserByFullNameSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const users = await UserDao.readUserByFullNameSearch('%' + req.params.search + '%');

        res.status(200).json(
            users
        );
    } catch (error) {
        console.error('[users.controller][readUsers][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching users'
        });
    }
};

