import express from "express";
import {
  getResources,
  createResource,
  getResource,
} from "../controllers/Resources.js";
const router = express.Router();

router.get("/", getResources);
router.get("/:id", getResource);
router.post("/", createResource);

export default router;
