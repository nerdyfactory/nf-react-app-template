import React, { useState, useReducer, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles/';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { PrivateNav, PublicNav } from 'navigations';
import useBootstrap from 'hooks/useBootstrap';
import { AppContext, appReducer, INITIAL_APP_STATE } from 'contexts/AppContext';
import { AuthActionTypes, AuthContext, authReducer, INITIAL_AUTH_STATE } from 'contexts';
import { Loading } from 'components';
import './App.css';
import { USER_TOKEN } from 'constants/utility';
import { getIntialState } from 'services/utils/persist-state';

function App() {
  const [authCtx, authDispatcher] = useReducer(authReducer, INITIAL_AUTH_STATE);
  const [appCtx, appDispatcher] = useReducer(appReducer, INITIAL_APP_STATE);
  const [theme] = useBootstrap();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const token = getIntialState(USER_TOKEN);
    if (token) {
      authDispatcher({ type: AuthActionTypes.SET_TOKEN, payload: token });
    }
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <Loading />;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <AuthContext.Provider value={{ ...authCtx, dispatch: authDispatcher }}>
          <AppContext.Provider value={{ ...appCtx, dispatch: appDispatcher }}>
            {authCtx.token ? <PrivateNav /> : <PublicNav />}
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  margin: '40px',
                  background: '#363636',
                  color: '#fff',
                  zIndex: 99999999,
                },
              }}
            />
          </AppContext.Provider>
        </AuthContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
