import { BrowserRouter, Route, Routes } from "react-router-dom";
import Proveedores from "../../Pages/Proveedor";
import Dashboard from "../../Pages/Dashbaord";
import Inventory from "../../Pages/Inventory";
import Orders from "../../Pages/Orders";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/pol" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/Proveedores" element={<Proveedores />}></Route>
    </Routes>
  );
}
export default AppRoutes;
