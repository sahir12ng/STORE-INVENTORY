import React, { useState } from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { Image, Typography } from "antd";

function AppHeader() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  const handleLogout = () => {
    // Elimina los datos de la sesión
    sessionStorage.clear();

    // Actualiza el estado para reflejar que el usuario ya no está autenticado
    setLoggedIn(false);

    // Redirige a la página de inicio de sesión (o cualquier otra página deseada)
    window.location.href = "/";
  };

  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://i.pinimg.com/736x/70/14/9a/70149aba1d1f61d1ef189a795bdaffa7.jpg"
      ></Image>
      <Typography.Title level={3}>Inventario de Tienda</Typography.Title>
      
      {isLoggedIn && (
          <LogoutOutlined
            style={{ fontSize: 24, cursor: "pointer" }}
            onClick={handleLogout}
          />
      )}
    </div>
  );
}

export default AppHeader;
