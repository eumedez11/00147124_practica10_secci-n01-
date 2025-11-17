import { pool } from "../connection/db.js";

export const createSale = async (req, res) => {
  const { amount, id_customer } = req.body;

  try {
    
    const customerCheck = await pool.query("SELECT * FROM customers WHERE id = $1", [id_customer]);

    if (customerCheck.rows.length === 0) {
      return res.status(400).json({ error: "El cliente no existe" });
    }

    // Insertar la venta
    const result = await pool.query(
      "INSERT INTO sales (amount, created_at, id_customer) VALUES ($1, NOW(), $2) RETURNING *",
      [amount, id_customer]
    );

    res.status(201).json({
      message: "Venta registrada con éxito",
      sale: result.rows[0],
    });
  } catch (error) {
    console.error("Error al registrar la venta:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const getSales = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT s.id, s.amount, s.created_at, c.name AS customer_name
      FROM sales s
      JOIN customers c ON s.id_customer = c.id
      ORDER BY s.id ASC
    `);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error al obtener las ventas:", error);
    res.status(500).json({ error: "Error al obtener las ventas" });
  }
};

export const getSalesReport = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT c.name, SUM(s.amount) AS total_sales
      FROM sales s
      JOIN customers c ON s.id_customer = c.id
      GROUP BY c.name
    `);
    res.json(result.rows);
  } catch (error) {
    console.error("Error al generar reporte de ventas:", error);
    res.status(500).json({ message: "Error al generar el reporte" });
  }
};