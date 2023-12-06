import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
import { Image, Typography } from "antd";

function AppHeader() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  const handleLogout = () => {
    setLoggedIn(false);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem("userData");
  };

  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://i.pinimg.com/736x/70/14/9a/70149aba1d1f61d1ef189a795bdaffa7.jpg"
      ></Image>
      <Typography.Title level={3}>Store Inventory</Typography.Title>
        {isLoggedIn && (
          <Link to="/">
            <LogoutOutlined
              style={{ fontSize: 24, cursor: "pointer" }}
              onClick={handleLogout}
            />
          </Link>
        )}
    </div>
  );
}

export default AppHeader;
