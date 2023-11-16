import { Request, RequestHandler, Response } from "express";
//import { Journal } from './journals.model';
import * as JournalsDao from './journals.dao';
import { OkPacket } from 'mysql';

export const readJournals: RequestHandler = async (req: Request, res: Response) => {
    try {
        let journals;
        let journalsId = (req.query.usersId as string);

        console.log('journalsId', journalsId);
        if (!(journalsId)) {
            console.log('in NAN')
            journals = await JournalsDao.readJournal();
        } else {

            journals = await JournalsDao.readJournalsByJournalId(journalsId);
        };

        res.status(200).json(
            journals
        );
    } catch (error) {
        console.error('[journal.controller][ReadJournals][Error]', error);
        res.status(500).json({
            message: "There was an error when fetching journals"
        });
    }
};

export const readJournalByUserId: RequestHandler = async (req: Request, res: Response) => {
    try {
        const journals = await JournalsDao.readJournalsByUserId(req.params.userfk);
        console.log(req.params)

        res.status(200).json(
            journals
        );
    } catch (error) {
        console.error('[journals.controller][readJournals][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching journals by userId'
        });
    }
};

export const readJournalByLocation: RequestHandler = async (req: Request, res: Response) => {
    try {
        const journals = await JournalsDao.readJournalsByLocation(req.params.location);
        console.log(req.params)

        res.status(200).json(
            journals
        );
    } catch (error) {
        console.error('[journals.controller][readJournals][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching journals by location'
        });
    }
};

export const readJournalsByLocationSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const journals = await JournalsDao.readJournalsByLocationSearch('%' + req.params.search + '%');

        res.status(200).json(
            journals
        );
    } catch (error) {
        console.error('[journals.controller][readJournals][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching journals by location'
        });
    }
};

export const createJournal: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await JournalsDao.createJournal(req.body);

        console.log('req.body', req.body);
        console.log('journal', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[journals.controller][createJournal][Error]', error);
        res.status(500).json({
            message: 'There was an error when writing journals'
        });
    }
};

export const updateJournal: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await JournalsDao.updateJournal(req.body);

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

export const deleteJournal: RequestHandler = async (req: Request, res: Response) => {
    try {
        let journalId = parseInt(req.params.journalId as string);

        console.log('journalsId', journalId);
        if (!Number.isNaN(journalId)) {
            const response = await JournalsDao.deleteJournal(journalId);

            res.status(200).json(
                response
            );
        } else {
            throw new Error("Integer expected for journalId");
        }
    } catch (error) {
        console.error('[journals.controller][deleteJournal][Error]', error);
        res.status(500).json({
            message: 'There was an error when deleting journal'
        });
    }
};

