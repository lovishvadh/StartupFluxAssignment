import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
// route components
import NotFoundPage from '../imports/pages/NotFound';
import Home from '../imports/pages/Home';
import Feed from '../imports/pages/Feed';
import Dashboard from '../imports/pages/Dashboard';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path = "/" component = { Home } />
      <Route exact path = "/dashboard" component = { Dashboard } />
      <Route exact path = "/feed" component = { Feed } />
      <Route path = "*" component = { NotFoundPage } />
    </Switch>
  </Router>
)