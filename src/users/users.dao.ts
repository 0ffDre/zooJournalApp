import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { User } from "./users.model";
import { usersQueries } from './users.queries';

export const readUsers = async () => {
    return execute<User[]>(usersQueries.readUsers, []);
};

export const readUsersByUserId = async (userId: string) => {
    return execute<User[]>(usersQueries.readUserByUserId, [userId]);
};

export const createUser = async (user: User) => {
    return execute<OkPacket>(usersQueries.createUser,
        [user.fullName, user.userId]);
};

export const updateUser = async (user: User) => {
    return execute<OkPacket>(usersQueries.updateUser,
        [user.fullName, user.userId]);
};

export const deleteUser = async (userId: number) => {
    return execute<OkPacket>(usersQueries.deleteUser, [userId]);
};

export const readUserByFullName = async (fullName: string) => {
    return execute<User[]>(usersQueries.readUserByFullName, [fullName]);
};

export const readUserByFullNameSearch = async (search: string) => {
    console.log('search param', search);
    return execute<User[]>(usersQueries.readUserByFullNameSearch, [search]);
};
