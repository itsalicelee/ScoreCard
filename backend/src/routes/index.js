import { Router } from "express";
import ScoreCardRouter from "./scoreCard.js";

const router = Router();
router.use("/api", ScoreCardRouter);
export default router;
