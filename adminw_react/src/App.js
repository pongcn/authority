import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { PrivateRoute, } from './components';
import { HomePage, LoginPage, PanelPage, } from './views';
import { AuthProvider } from './store'

export const App = props => {

  return (
    <AuthProvider>
      <BrowserRouter >
        <header>
          <ul id="topNav">
            <li><Link to="/home">home</Link></li>
            <li><Link to="/login">login</Link></li>
            <li><Link to="/panel">panel</Link></li>
          </ul>
        </header>
        <main>
          <Switch>
            <PrivateRoute exact path="/panel" component={PanelPage} />
            {/* <Redirect path="/" to={{ pathname: '/login' }} /> */}
            <Route path="/home" component={HomePage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </main>
      </BrowserRouter>
    </AuthProvider >
  )
}


