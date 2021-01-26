import React, { useContext } from 'react';
import { AuthContext, AuthActionTypes } from '../../contexts';

export function Login() {
  const { dispatch } = useContext(AuthContext);
  const onLogin = () => dispatch({ type: AuthActionTypes.SET_TOKEN, payload: 'somerandometoken' });

  return (
    <div>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}
