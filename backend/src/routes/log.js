import express from "express";
import { handleNewLog, getLogsForUser } from "../controllers/logsController.js";

const router = express.Router();

router.post("/", handleNewLog);

router.get("/:name", getLogsForUser);

export default router;
