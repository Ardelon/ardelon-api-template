import { Router } from "express";
import {
	getDumyController,
	addDumyController,
	updateDumyController,
	deleteDumyController,
} from "../controller/dumy";
export const router = Router();

router.get("/", getDumyController);
router.post("/", addDumyController);
router.put("/", updateDumyController);
router.delete("/", deleteDumyController);
