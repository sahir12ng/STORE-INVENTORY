import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/login";
import Registro from "./Components/registro";
import Pol from "./Components/Menu";
import Dashboard from "./Pages/Dashbaord";
import Inventory from "./Pages/Inventory";
import UserManagement from "./Pages/Orders";
import Proveedores from "./Pages/Proveedor";
import ProveedorForm from "./Pages/crear/crear";
import EditarProveedorForm from "./Pages/editar/editar";
import FormularioProducto from "./Pages/crear/prod";
import EditarProductoForm from "./Pages/editar/prod";
import ForgotPassword from "./Components/contraseña/pass";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="Menu" element={<Pol />} />
        <Route path="Crear" element={<Registro />} />
        <Route path="pol" element={<Dashboard />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="orders" element={<UserManagement />} />
        <Route path="Proveedores" element={<Proveedores />} />
        <Route path="crearProveedor" element={<ProveedorForm />} />
        <Route path="/updateProv/:id" element={<EditarProveedorForm />} />
        <Route path="crearProducto" element={<FormularioProducto/>}/>
        <Route path="/updateProd/:id" element={<EditarProductoForm/>}/>
        <Route path="/pass" element={<ForgotPassword/>}/>
      </Routes>
      </>
  );
}

export default App;
