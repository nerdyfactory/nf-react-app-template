import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import ROUTES from './Routes';

export function PublicNav() {
  return (
    <App>
      <Router>
        <Switch>
          {ROUTES.PUBLIC.map((r) => (
            <Route key={r.NAME} path={r.PATH} component={r.component} />
          ))}
          <Redirect to={ROUTES?.PUBLIC[0]?.PATH || '/'} />
        </Switch>
      </Router>
    </App>
  );
}

const App = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 600px;
  margin: 100px auto;
`;
