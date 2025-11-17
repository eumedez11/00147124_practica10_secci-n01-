import express from "express";
import { signin } from "../controller/authControllers.js";

const router = express.Router();

router.post("/signin", signin);

export default router;
