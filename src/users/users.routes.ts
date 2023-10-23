import { Router } from 'express';
import * as UsersController from './users.controller';

const router = Router();
router.
    route('/users').
    get(UsersController.readUsers);

router.
    route('/users/:fullName').
    get(UsersController.readUserByFullName);

router.
    route('/users/:search/fullName/:search').
    get(UsersController.readUserByFullNameSearch);

router.
    route('/users').
    post(UsersController.createUser);

router.
    route('/users').
    put(UsersController.updateUser);

router.
    route('/users/:userId').
    delete(UsersController.deleteUser);
export default router; 