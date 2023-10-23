export const journalsQueries = {
    readJournals: `
        SELECT
            id as journalId, location AS location, date AS date, 
            description AS description, feedback AS feedback
        FROM zooJournal.journals
        `,

    readJournalsByUserId: `
        SELECT 
            id AS journalId,
            userfk AS userId,
            location AS location,
            date AS date,
            description AS description,
            feedback AS feedback
        FROM zoojournal.journals
        WHERE userfk = ?
        `,

    readJournalsByJournalId: `
        SELECT 
            id AS journalId,
            userfk AS userId,
            location AS location,
            date AS date,
            description AS description,
            feedback AS feedback
        FROM zoojournal.journals
        WHERE zoojournal.journals.id = ?
        `,

    readJournalsByLocationSearch: `
        SELECT 
            id AS journalId,
            userfk AS userId,
            location AS location,
            date AS date,
            description AS description,
            feedback AS feedback
        FROM zoojournal.journals
        WHERE zoojournal.journals.location LIKE ?
        `,


    readJournalsByLocation: `
        SELECT 
            id AS journalId,
            userfk AS userId,
            location AS location,
            date AS date,
            description AS description,
            feedback AS feedback
        FROM zoojournal.journals
        WHERE zoojournal.journals.location = ?
        `,

    createJournal: `
        INSERT INTO JOURNALS(location, date, description, feedback, userfk) VALUES(?,?,?,?,?)
        `,
    updateJournal: `
        UPDATE zoojournal.journals
        SET location = ?, date = ?, description = ?, feedback = ?
        WHERE id = ?
        `,
    deleteJournal: `        
        DELETE From zoojournal.journals
        WHERE id = ?
        `,
}