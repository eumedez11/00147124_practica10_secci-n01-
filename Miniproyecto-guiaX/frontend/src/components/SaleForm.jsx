import { useState } from "react";

function SaleForm() {
  const [formData, setFormData] = useState({
    amount: "",
    id_customer: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:3000/api/sales", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error al registrar la venta");
      }

      setMessage(" Venta registrada con éxito");
      setFormData({ amount: "", id_customer: "" });
    } catch (error) {
      setMessage(` ${error.message}`);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Registrar Nueva Venta</h2>
     
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Monto:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            className="border p-2 w-full rounded"
            placeholder="Ej: 150.50"
          />
        </div>

        <div>
          <label className="block mb-1">ID del Cliente:</label>
          <input
            type="number"
            name="id_customer"
            value={formData.id_customer}
            onChange={handleChange}
            required
            className="border p-2 w-full rounded"
            placeholder="Ej: 2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Guardar Venta
        </button>
       
      </form>

      {message && <p className="mt-4 font-medium">{message}</p>}
     </div> 
  );
}

export default SaleForm;
