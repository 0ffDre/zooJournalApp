import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Journal } from "./journals.model";
import { journalsQueries } from './journals.queries';

export const readJournal = async () => {
    return execute<Journal[]>(journalsQueries.readJournals, []);
};

export const readJournalsByUserId = async (userId: string) => {
    return execute<Journal[]>(journalsQueries.readJournalsByUserId, [userId]);
};

export const readJournalsByJournalId = async (journalId: string) => {
    return execute<Journal[]>(journalsQueries.readJournalsByJournalId, [journalId]);
};

export const readJournalsByLocationSearch = async (search: string) => {
    console.log('search param', search);
    return execute<Journal[]>(journalsQueries.readJournalsByLocationSearch, [search]);
};

export const readJournalsByLocation = async (location: string) => {
    return execute<Journal[]>(journalsQueries.readJournalsByLocation, [location]);
};

export const createJournal = async (journal: Journal) => {
    return execute<OkPacket>(journalsQueries.createJournal,
        [journal.location, journal.date, journal.description, journal.feedback, journal.userfk]);
};

export const updateJournal = async (journal: Journal) => {
    return execute<OkPacket>(journalsQueries.updateJournal,
        [journal.location, journal.date, journal.description, journal.feedback, journal.journalId]);
};

export const deleteJournal = async (journalId: number) => {
    return execute<OkPacket>(journalsQueries.deleteJournal, [journalId]);
};
