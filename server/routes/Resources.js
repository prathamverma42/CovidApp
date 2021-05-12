import express from "express";

import {
  getResources,
  createResource,
  getCityResources,
  deleteResource,
} from "../controllers/Resources.js";

const router = express.Router();

router.get("/all", getResources);

router.post("/add", createResource);

router.post("/", getCityResources);

router.delete("/:id", deleteResource);

export default router;
