import express from 'express';
import {addUser,checkUser, getAllUser} from '../controllers/users.js';
const router=express.Router();
router.post('/add',addUser);
router.get('/',getAllUser);
router.post('/',checkUser);
export default router;
