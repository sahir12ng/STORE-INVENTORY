// SideMenu.js
import React, { useEffect, useState } from "react";
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useLocation, Routes, Route, Outlet, Link } from "react-router-dom";
import Dashboard from "../../Pages/Dashbaord";
import Inventory from "../../Pages/Inventory";
import Orders from "../../Pages/Orders";
import Proveedores from "../../Pages/Proveedor";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          setSelectedKeys(item.key);
        }}
        selectedKeys={[selectedKeys]}
      >
        
        <Menu.Item key="/inventory" icon={<ShopOutlined />}>
          <Link to="/inventory">Inventorio</Link>
        </Menu.Item>
        <Menu.Item key="/orders" icon={<ShoppingCartOutlined />}>
          <Link to="/orders">Gestion usuario</Link>
        </Menu.Item>
        <Menu.Item key="/Proveedores" icon={<UserOutlined />}>
          <Link to="/Proveedores">Proveedores</Link>
        </Menu.Item>
        <Menu.Item key="/menu" icon={<AppstoreOutlined />}>
          <Link to="/pol">Configuracion</Link>
        </Menu.Item>
      </Menu>

      <div className="Content">
        <Outlet />
      </div>
    </div>
  );
}

export default SideMenu;
