import express from 'express';
import {addUser,checkUser} from '../controllers/users.js';
const router=express.Router();
router.post('/',addUser);
router.get('/',checkUser);
export default router;
