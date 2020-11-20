import React, { useContext } from 'react';
import { AuthContext, AuthActionTypes } from '../../contexts';

export function Logout() {
  const { dispatch } = useContext(AuthContext);
  const onLogout = () => dispatch({ type: AuthActionTypes.REMOVE_TOKEN });

  return (
    <div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
