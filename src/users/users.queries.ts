export const usersQueries = {
    readUsers: `
        SELECT
            id as userId, fullName AS fullName
        FROM zooJournal.users
        `,

    readUserByFullName: `
        SELECT
        id as userId, fullName AS fullName
        FROM zoojournal.users
        WHERE zoojournal.users.fullName = ?
        `,

    readUserByFullNameSearch: `
        SELECT
        id as userId, fullName AS fullName
        FROM zoojournal.users
        WHERE zoojournal.users.fullName LIKE ?
        `,

    readUserByUserId: `
        SELECT
        id as userId, fullName AS fullName
        FROM zoojournal.users
        WHERE zoojournal.users.id = ?
        `,
    createUser: `
        INSERT INTO USERS(fullName) VALUES(?)
        `,
    updateUser: `
        UPDATE zoojournal.users
        SET fullName = ?
        WHERE id = ?
        `,
    deleteUser: `        
        DELETE From zoojournal.users
        WHERE id = ?
        `,
}