import { useEffect, useState } from "react";

function SalesList() {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/sales")
      .then((res) => res.json())
      .then((data) => {
        setSales(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar las ventas:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando ventas...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Listado de Ventas</h2>
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2 text-left">ID Venta</th>
            <th className="border px-4 py-2 text-left">Monto</th>
            <th className="border px-4 py-2 text-left">Fecha</th>
            <th className="border px-4 py-2 text-left">Cliente</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{sale.id}</td>
              <td className="border px-4 py-2">${sale.amount}</td>
              <td className="border px-4 py-2">
                {new Date(sale.created_at).toLocaleString()}
              </td>
              <td className="border px-4 py-2">{sale.customer_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesList;
