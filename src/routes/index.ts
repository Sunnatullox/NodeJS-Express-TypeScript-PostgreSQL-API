import {Router} from 'express';
const router = Router();

import {getUsers, getUserbyId, createUsers, updateUsers, deleteUsers } from "../controllers/index.controller";



router.get('/users', getUsers )
router.get('/users/:id', getUserbyId )
router.post('/users', createUsers )
router.put('/users/:id', updateUsers )
router.delete('/users/:id', deleteUsers )

export default router