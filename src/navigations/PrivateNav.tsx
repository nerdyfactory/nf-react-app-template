import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ROUTES from './Routes';

export function PrivateNav() {
  return (
    <Router>
      <Switch>
        {ROUTES.PRIVATE.map((r) => (
          <Route key={r.NAME} path={r.PATH} component={r.component} />
        ))}
        <Redirect to={ROUTES?.PRIVATE[0]?.PATH || '/'} />
      </Switch>
    </Router>
  );
}
