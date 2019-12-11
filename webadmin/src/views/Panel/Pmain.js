import React from 'react';
// import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, NavLink, useRouteMatch, useParams } from 'react-router-dom'
// import { Layout, Icon, Menu } from 'antd';
import { Ptable } from '../Panel'
// import { Pform } from './Pform'

// import { initialRes, resReducer } from './store'

// const { Header, Content, Sider } = Layout;


// clicked menu => changed url && called main => fecthed data => display data to main 


// const reqBody = {
//     product: {
//         query_many: { query: ` query { products {_id name productType release } } ` },
//         query_one: { query: ` query { products (${_id}) { name productType release } } ` },
//     },
//     blogs: {
//         read: { query: ` query { blogs { _id name author_ID release } } ` }
//     },
//     users: {
//         read: { query: ` query { users { _id email password } } ` }
//     },
// }


// const channel = {
//     recomment,
//     product,
//     blog,
// }


export const Pmain = function () {

    // let channelSwitch = (data) => {

    // }
    let { url } = useRouteMatch();
    let { id } = useParams();

    console.log({ id })
    return (
        <Router>
            <ul>
                <li><NavLink to={`${url}/table@=recomments`} /* onClick={() => dispatch({ type: 'recomment' })} */ >recomment</NavLink></li>
                <li><NavLink to={`${url}/table@=products`} /* onClick={() => dispatch({ type: 'recomment' })} */ >product</NavLink></li>
                <li><NavLink to={`${url}/table@=blogs`} /* onClick={() => dispatch({ type: 'recomment' })} */ >blog</NavLink></li>
                <li><NavLink to={`${url}/table@=users`} /* onClick={() => dispatch({ type: 'recomment' })} */ >user</NavLink></li>
            </ul>
            <Switch>
                <Route path={`${url}/table@=:id`}><Ptable /></Route>
                {/* <Route path={`${url}/form@=:id`}><Pform /></Route> */}
            </Switch>
            {/* <Route path={`${url}/Pform/:id`} ><Pform /></Route> */}
        </Router>
    )


}

