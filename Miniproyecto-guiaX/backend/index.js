import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/usersRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import customersRoutes from "./routes/customerRoutes.js";
import salesRoutes from "./routes/salesRoutes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Rutas principales
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/customers", customersRoutes);
app.use("/api/sales", salesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
