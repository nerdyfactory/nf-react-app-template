import React, { useContext, useState } from 'react';
import { AuthContext, AuthActionTypes } from '../../contexts';
import { DefaultButton } from 'components/DefaultButton';
import { MUIColorEnums } from 'types';
import { DefaultInput } from 'components/DefaultInput';
import styled from 'styled-components';

export function Login() {
  const { dispatch } = useContext(AuthContext);
  const [user, setUser] = useState<string>(``);
  const [password, setPassword] = useState<string>(``);

  const onLogin = () => {
    // login(user, password);
    dispatch({ type: AuthActionTypes.SET_TOKEN, payload: 'somerandomtoken' });
  };

  return (
    <App>
      <DefaultInput placeholder="User" value={user} onChange={setUser} />
      <DefaultInput placeholder="Password" value={password} onChange={setPassword} />
      <DefaultButton muiColor={MUIColorEnums.primary} label="Login" onClick={onLogin} />
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
