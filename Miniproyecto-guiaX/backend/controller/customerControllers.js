import { pool } from "../connection/db.js";


export const getCustomers = (req, res) => {
  pool.query("SELECT * FROM customers ORDER BY id ASC", (err, results) => {
    if (err) {
      console.error("Error al obtener los clientes:", err);
      return res.status(500).json({ error: "Error al obtener los clientes" });
    }
    res.status(200).json(results.rows);
  });
};

export const searchCustomerByCode = async (req, res) => {
  const { code } = req.query;

  try {
    const result = await pool.query("SELECT * FROM customers WHERE code = $1", [code]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error al buscar cliente:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};