import express from 'express';
import {addUser,checkUser} from '../controllers/users.js';
const router=express.Router();
router.post('/add',addUser);
router.post('/',checkUser);
export default router;
