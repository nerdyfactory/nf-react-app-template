import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AppContainer } from 'components';
import ROUTES from './Routes';

export function PublicNav() {
  return (
    <AppContainer>
      <Router>
        <Switch>
          {ROUTES.PUBLIC.map((r) => (
            <Route key={r.NAME} path={r.PATH} component={r.component} />
          ))}
          <Redirect to={ROUTES?.PUBLIC[0]?.PATH || '/'} />
        </Switch>
      </Router>
    </AppContainer>
  );
}
