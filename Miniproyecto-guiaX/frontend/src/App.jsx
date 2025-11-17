import CustomerList from "./components/CustomerList";
import SaleForm from "./components/SaleForm";
import SalesList from "./components/SaleList";
import SalesReport from "./components/SalesReport"; 

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Panel de Clientes y Ventas
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow">
          <SaleForm />
        </div>
        <div className="bg-white p-6 rounded-2xl shadow overflow-x-auto">
          <CustomerList />
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow mb-10">
        <SalesList />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <SalesReport />
      </div>
    </div>
  );
}

export default App;


