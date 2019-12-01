import React from 'react';
import { BrowserRouter as Router, Route, NavLink, useRouteMatch, useParams } from 'react-router-dom'
import { HomePage, LoginPage, Pmain, } from './views';
import { AuthProvider } from './store'
import { logout } from './services'



export const App = function () {

  // let { url } = useRouteMatch();
  // let { id } = useParams();

  // console.log({ url })

  return (
    <AuthProvider>
      <Router >
        <header>
          <ul id="topNav">
            <li><NavLink to="/home">home</NavLink></li>
            <li><NavLink to="/login">login</NavLink></li>
            <li><NavLink to="/login" onClick={logout}>Logout</NavLink></li>
            <li><NavLink to="/panel">panel</NavLink></li>
          </ul>
        </header>
        <main>
          {/* <PrivateRoute path="/panel" component={PanelPage} /> */}
          {/* <Redirect path="/" to={{ pathname: '/login' }} /> */}
          <Route exact path="/home" ><HomePage /></Route>
          <Route path="/login" ><LoginPage /></Route>
          <Route path="/panel"><Pmain /></Route>
        </main>
      </Router>
    </AuthProvider >
  )
}


// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     localStorage.getItem('userAuth')
//       ? <Component {...props} />
//       : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//   )} />
// )
