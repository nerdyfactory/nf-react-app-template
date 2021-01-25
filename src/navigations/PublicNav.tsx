import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Login } from '../pages';

export function PublicNav() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Redirect to={'/login'} />
      </Switch>
    </Router>
  );
}
