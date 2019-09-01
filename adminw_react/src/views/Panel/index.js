import React from 'react';
import { Layout, Icon } from 'antd';
import { Pmenu } from './Pmenu'
import { Ptable } from './Ptable'
import 'antd/dist/antd.css';
import './style.css';
const { Header, Content, Footer, Sider } = Layout;


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
                    <Pmenu />
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
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout >
        </>
    );
}

// ReactDOM.render(<PanelPage />, root);
