// routes/customers.js
import express from "express";
import { getCustomers, searchCustomerByCode  } from "../controller/customerControllers.js";

const router = express.Router();

// GET /api/customers
router.get("/", getCustomers);
router.get("/search", searchCustomerByCode);

export default router;
