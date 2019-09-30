import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import { Layout, Icon, Menu } from 'antd';
// import { Pmenu } from './Pmenu'
import { Ptable } from './Ptable'
// import { initialRes, resReducer } from './store'
// import 'antd/dist/antd.css';
import './style.css';
// const { Header, Content, Sider } = Layout;


// clicked menu => changed url && called main => fecthed data => display data to main 



export const PanelPage = props => {

    // const [resSate, dispatch] = React.useReducer(resReducer, initialRes);

    // const [state, setState] = React.useState({ collapsed: false })

    // const toggle = () => {
    //     setState({
    //         collapsed: !state.collapsed,
    //     });
    // };


    return (
        <Router>
            <ul>
                <li><Link to={`${props.match.url}/recomment`} /* onClick={() => dispatch({ type: 'recomment' })} */ >recomment</Link></li>
                <li><Link to={`${props.match.url}/product`} /* onClick={() => dispatch({ type: 'product' })} */ >product</Link></li>
                <li><Link to={`${props.match.url}/blog`} /* onClick={() => dispatch({ type: 'blog' })} */ >blog</Link></li>
            </ul>
            <Route path={`${props.match.path}/:id`} component={Ptable} />
            {/* < Layout >
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={state.collapsed}
                    breakpoint="lg"
                    collapsedWidth="0"
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <li><Link to="/panel/recomment" >recomment</Link></li>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <li><Link to="/panel/product">product</Link></li>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="upload" />
                            <li><Link to="/panel/blog">blog</Link></li>
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
                        <Route path={`${props.match.path}/:id`} component={Ptable} />
                    </Content>
                </Layout>
            </Layout > */}
        </Router>
    );
}


