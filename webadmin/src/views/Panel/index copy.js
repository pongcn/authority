import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Icon, Menu } from 'antd';
// import { Pmenu } from './Pmenu'
import { Ptable } from './Ptable'
import { logout } from '../../services'
import 'antd/dist/antd.css';
import './style.css';
const { Header, Content, Sider } = Layout;


// clicked menu => changed url && called main => fecthed data => display data to main 



export const PanelPage = props => {



    const [state, setState] = React.useState({ collapsed: false })

    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };

    return (
        <>
            < Layout >
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={state.collapsed}
                    breakpoint="lg"
                    collapsedWidth="0"
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span><Link to="/panel">panel</Link></span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span><Link to="/panel/recomment" >recomment</Link></span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span><Link to="/panel/product">product</Link></span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="upload" />
                            <span><Link to="/panel/blog">blog</Link></span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="upload" />
                            <span><Link to="/login" onClick={logout}>Logout</Link></span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={toggle}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        <Ptable />
                    </Content>
                    {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
                </Layout>
            </Layout >
        </>
    );
}

// ReactDOM.render(<PanelPage />, root);
