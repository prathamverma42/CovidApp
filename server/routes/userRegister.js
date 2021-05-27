import express from "express";

import {
  addNewUser,
  allNewUsers,
  deleteUser,
} from "../controllers/userRegister.js";

const router = express.Router();

router.post("/add", addNewUser);
router.get("/", allNewUsers);
router.delete("/:id", deleteUser);

export default router;
