import express from "express";
import {
  getResources,
  createResource,
  // getResource,
  getCityResources,
  deleteResource
} from "../controllers/Resources.js";
const router = express.Router();

router.get("/all", getResources);
// router.get("/:id", getResource);
router.post("/add", createResource);
router.post("/",getCityResources);
router.delete('/:id',deleteResource);

export default router;
