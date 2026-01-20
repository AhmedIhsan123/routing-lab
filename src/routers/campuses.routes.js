import { Router } from "express";
import * as ctl from "../controllers/campusesController.js";

// Make the router
const router = Router();

router.get("/about", ctl.getAbout);
router.get("/info", ctl.getAbout);

router.get("/", ctl.getAllCampuses);
router.get("/search", ctl.searchCampuses);
router.get("/:id", ctl.getCampusByID);

export default router;
