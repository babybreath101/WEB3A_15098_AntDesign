import React, { Component } from 'react';
import { Menu } from 'antd';
import './navbar.css';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';


const { SubMenu } = Menu;

class Navbar extends Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
    <nav className="menuBar">
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="mail">
          <MailOutlined />
            Home
        </Menu.Item>
        <Menu.Item key="app">
          <AppstoreOutlined />
             Gallery
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="https://github.com/babybreath101" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </Menu.Item>
      </Menu>
    </nav>
    );
  }
}

export default Navbar;
