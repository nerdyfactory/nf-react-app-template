import React, { useState, useReducer, useEffect } from 'react';
import { PrivateNav, PublicNav } from './navigations';
import { AuthActionTypes, AuthContext, authReducer, INITIAL_AUTH_STATE } from './contexts';
import { Loading } from './components';
import './App.css';

function App() {
  const [authCtx, authDispatcher] = useReducer(authReducer, INITIAL_AUTH_STATE);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      authDispatcher({ type: AuthActionTypes.SET_TOKEN, payload: token });
    }
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <Loading />;

  return (
    <div className="App">
      <AuthContext.Provider value={{ ...authCtx, dispatch: authDispatcher }}>
        {authCtx.token ? <PrivateNav /> : <PublicNav />}
      </AuthContext.Provider>
    </div>
  );
}
export default App;
