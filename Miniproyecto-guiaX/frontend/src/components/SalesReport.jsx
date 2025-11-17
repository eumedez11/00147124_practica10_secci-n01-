import { useEffect, useState } from "react";

export default function SalesReport() {
  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/sales/report")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al obtener el reporte de ventas");
        }
        return res.json();
      })
      .then((data) => setReport(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center">Cargando reporte...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="p-6 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Reporte de Ventas por Cliente
      </h2>
      <table className="min-w-full border border-gray-300 text-center">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">Cliente</th>
            <th className="px-4 py-2 border">Total Ventas</th>
          </tr>
        </thead>
        <tbody>
          {report.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-4 py-2 border">{row.name}</td>
              <td className="px-4 py-2 border">
                ${Number(row.total_sales).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
