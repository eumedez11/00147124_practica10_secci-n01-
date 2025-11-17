import { useEffect, useState } from "react";
import "./../style/customerList.css";

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    fetch("http://localhost:3000/customers")
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar los clientes:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando clientes...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Listado de Clientes</h2>
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2 text-left">ID</th>
            <th className="border px-4 py-2 text-left">Nombre</th>
            <th className="border px-4 py-2 text-left">Dirección</th>
            <th className="border px-4 py-2 text-left">Teléfono</th>
            <th className="border px-4 py-2 text-left">Código</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{customer.id}</td>
              <td className="border px-4 py-2">{customer.name}</td>
              <td className="border px-4 py-2">{customer.address}</td>
              <td className="border px-4 py-2">{customer.phone}</td>
              <td className="border px-4 py-2">{customer.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;
