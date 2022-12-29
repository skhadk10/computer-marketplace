import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["home"]}
      style={{ display: "block" }}
    >
      <Menu.Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/"> Home</Link>
      </Menu.Item>
      <SubMenu icon={<SettingOutlined />} title="Username">
        <Menu.Item key="two">Navigation Two</Menu.Item>
        <Menu.Item key="three">Navigation Three</Menu.Item>
      </SubMenu>
      <Menu.Item
        key="login"
        icon={<UserAddOutlined />}
        style={{
          float: "right",
        }}
      >
        <Link to="/login"> Login</Link>
      </Menu.Item>
      <Menu.Item
        key="register"
        icon={<UserOutlined />}
        style={{
          float: "right",
        }}
      >
        <Link to="/register"> Register</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
