import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../../services'
import { Menu, Icon } from 'antd';

export const Pmenu = props => {

    return (

        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <Icon type="user" />
                <span><NavLink to="/panel">panel</NavLink></span>
            </Menu.Item>
            <Menu.Item key="2">
                <Icon type="video-camera" />
                <span><NavLink to="/panel/recomment">recomment</NavLink></span>
            </Menu.Item>
            <Menu.Item key="3">
                <Icon type="upload" />
                <span><NavLink to="/panel/product">product</NavLink></span>
            </Menu.Item>
            <Menu.Item key="4">
                <Icon type="upload" />
                <span><NavLink to="/panel/blog">blog</NavLink></span>
            </Menu.Item>
            <Menu.Item key="5">
                <Icon type="upload" />
                <span><NavLink to="/login" onClick={logout}>Logout</NavLink></span>
            </Menu.Item>
        </Menu>
    );
}

// ReactDOM.render(<PanelPage />, root);
