import express from "express";

import {
  addUser,
  checkUser,
  getAllUser,
  deleteUser,
} from "../controllers/users.js";

const router = express.Router();

router.post("/add", addUser);

router.get("/", getAllUser);

router.post("/", checkUser);

router.delete("/:id", deleteUser);

export default router;
