import express from "express";

import {
  addUser,
  checkUser,
  getAllUser,
  deleteUser,
  addRegisteredUser
} from "../controllers/users.js";

const router = express.Router();

router.post("/add", addUser);

router.get("/", getAllUser);

router.post("/", checkUser);

router.delete("/:id", deleteUser);

router.post("/addRegisteredUser/:id",addRegisteredUser);

export default router;
