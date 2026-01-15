import { Router } from "express";
import { getAbout, getAllCampuses } from "../controllers/campusesController.js";

// Make the router
const router = Router();

router.get(["/about", "/info"], getAbout);
router.get(["/campuses", "/locations"], getAllCampuses);

export default router;
