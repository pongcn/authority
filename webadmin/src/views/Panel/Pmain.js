import React from 'react';
// import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import { Layout, Icon, Menu } from 'antd';
import { Ptable } from './Ptable'
import { Precom } from './Precom'
// import { initialRes, resReducer } from './store'

// const { Header, Content, Sider } = Layout;


// clicked menu => changed url && called main => fecthed data => display data to main 



export const Pmain = props => {

    return (
        <Router>
            <ul>
                <li><Link to={`${props.match.url}/recomment`} /* onClick={() => dispatch({ type: 'recomment' })} */ >recomment</Link></li>
                <li><Link to={`${props.match.url}/product`} /* onClick={() => dispatch({ type: 'product' })} */ >product</Link></li>
                <li><Link to={`${props.match.url}/blog`} /* onClick={() => dispatch({ type: 'blog' })} */ >blog</Link></li>
            </ul>
            <Route path={`${props.match.path}/product`} component={Ptable} />
            <Route path={`${props.match.path}/recomment`} component={Precom} />
        </Router>
    )


    // let [state, setState] = React.useState({
    //     collapsed: false,
    // })

    // const toggle = () => {
    //     setState({
    //         collapsed: !state.collapsed,
    //     });
    // };

    // return (
    //     <Router>
    //         < Layout >
    //             <Sider
    //                 trigger={null}
    //                 collapsible
    //                 collapsed={state.collapsed}
    //                 breakpoint="lg"
    //                 collapsedWidth="0"
    //             >
    //                 <div className="logo" />
    //                 <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
    //                     <Menu.Item key="1">
    //                         <Icon type="video-camera" />
    //                         <span><Link to={`${props.match.url}/recomment`} >recomment</Link></span>
    //                     </Menu.Item>
    //                     <Menu.Item key="2">
    //                         <Icon type="upload" />
    //                         <span><Link to={`${props.match.url}/product`}>product</Link></span>
    //                     </Menu.Item>
    //                     <Menu.Item key="">
    //                         <Icon type="upload" />
    //                         <span><Link to={`${props.match.url}/blog`}>blog</Link></span>
    //                     </Menu.Item>
    //                 </Menu>
    //             </Sider>
    //             <Layout>
    //                 <Header style={{ background: '#fff', padding: 0 }}>
    //                     <Icon
    //                         className="trigger"
    //                         type={state.collapsed ? 'menu-unfold' : 'menu-fold'}
    //                         onClick={toggle}
    //                     />
    //                 </Header>
    //                 <Content
    //                     style={{
    //                         margin: '24px 16px',
    //                         padding: 24,
    //                         background: '#fff',
    //                         minHeight: 280,
    //                     }}
    //                 >
    //                     <Route path={`${props.match.path}/:id`} component={Ptable} />
    //                 </Content>
    //             </Layout>
    //         </Layout >
    //     </Router>
    // )
}

