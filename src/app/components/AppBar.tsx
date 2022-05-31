import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.png';

const AppBar: React.FC = () => (
  <div className="app-bar">
    <img src={logo} alt="appbar" />
    <Menu
      className="app-bar-menu"
      mode="horizontal"
      defaultSelectedKeys={['home']}
    >
      <Menu.Item key="home">
        <Link to="/" className="app-bar-menu-item">Home</Link>
      </Menu.Item>
      <Menu.Item key="location">
        <Link to="/location" className="app-bar-menu-item">Location</Link>
      </Menu.Item>
      <Menu.Item key="episode">
        <Link to="/episode" className="app-bar-menu-item">Episode</Link>
      </Menu.Item>
    </Menu>
  </div>
);

export default AppBar;
