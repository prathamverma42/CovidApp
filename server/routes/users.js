import express from "express";

import {
  addUser,
  checkUser,
  getAllUser,
  deleteUser,
  addRegisteredUser,
  checkUniqueEmail,
} from "../controllers/users.js";

const router = express.Router();

router.post("/add", addUser);

router.get("/", getAllUser);

router.post("/", checkUser);

router.delete("/:id", deleteUser);

router.post("/addRegisteredUser/:id", addRegisteredUser);

router.post("/checkunique", checkUniqueEmail);

export default router;
