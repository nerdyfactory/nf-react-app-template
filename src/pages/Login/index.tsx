import React, { useContext, useState } from 'react';
import { AuthContext, AuthActionTypes } from '../../contexts';

export function Login() {
  const { dispatch } = useContext(AuthContext);
  const [user, setUser] = useState<string>(``);
  const [password, setPassword] = useState<string>(``);

  const onLogin = () => {
    // login(user, password);
    dispatch({ type: AuthActionTypes.SET_TOKEN, payload: 'somerandomtoken' });
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={user}
        onChange={({ target }) => setUser(target.value)}
      />
      <input
        type="text"
        name="password"
        placeholder="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button onClick={onLogin}>Login</button>
    </div>
  );
}
