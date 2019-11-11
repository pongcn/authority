import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HomePage, LoginPage, Pmain, } from './views';
import { AuthProvider } from './store'
import { logout } from './services'

export const App = props => {

  return (
    <AuthProvider>
      <Router >
        <header>
          <ul id="topNav">
            <li><Link to="/home">home</Link></li>
            <li><Link to="/login">login</Link></li>
            <li><Link to="/login" onClick={logout}>Logout</Link></li>
            <li><Link to="/panel">panel</Link></li>
          </ul>
        </header>
        <main>
          {/* <PrivateRoute path="/panel" component={PanelPage} /> */}
          {/* <Redirect path="/" to={{ pathname: '/login' }} /> */}
          <Route exact path="/home" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/panel" component={Pmain} />
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
