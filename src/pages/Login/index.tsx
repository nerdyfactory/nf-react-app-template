import React, { useContext, useState } from 'react';
import useAuth from 'hooks/useAuth';
import { AuthContext, AuthActionTypes } from '../../contexts';

export function Login() {
  const { login } = useAuth();
  const [user, setUser] = useState<string>(``);
  const [password, setPassword] = useState<string>(``);

  const onLogin = async () => {
    try {
      await login(user, password);
    } catch (error) {
      console.error(error);
    }
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
