import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Logout } from '../pages';

export function PrivateNav() {
  return (
    <Router>
      <Switch>
        <Route path="/logout" component={Logout} />
        <Redirect to={'/logout'} />
      </Switch>
    </Router>
  );
}
