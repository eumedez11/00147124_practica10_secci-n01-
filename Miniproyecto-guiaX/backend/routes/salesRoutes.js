import express from "express";
import { createSale, getSales, getSalesReport } from "../controller/salesControllers.js";

const router = express.Router();


router.post("/", createSale);
router.get("/", getSales);
router.get("/report", getSalesReport);

export default router;
