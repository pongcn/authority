import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { PrivateRoute, Navigation } from './components';
import { HomePage, LoginPage, BlogPage, RecomPage, ProductPage } from './views';
// import { createBrowserHistory, createHashHistory, createMemoryHistory } from 'history'
// import { userService } from '../services';
// import { observable } from 'mobx';

import {Ireducer} from './demo/useReducer/Ireducer'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      auth: true,
    };
    // this.authtoken()

  }
  // authtoken() {
  //   const authtoken = localStorage.getItem('user') ? false : true
  //     if (!authtoken) {
  //       return this.setState({ auth: true });
  //     }
  //     return
  // }

  render() {
    return (
      <>
        <BrowserRouter>
          <header>
            {this.state.auth && < Navigation />}
            {this.state.auth && <Link to="/login">Logout</Link>}
            <button onClick={this.refreshRoute}>button</button>
          </header>
          <main>
            <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <PrivateRoute exact path="/blog" component={BlogPage} />
              <PrivateRoute exact path="/recom" component={RecomPage} />
              <PrivateRoute exact path="/product" component={ProductPage} />
              <Route path="/login" component={LoginPage} />
            </Switch>
            <Ireducer />
          </main>
        </BrowserRouter>
      </>
    );
  }
}

export { App }; 