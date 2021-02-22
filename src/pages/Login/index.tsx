import React, { Fragment, useCallback, useState } from 'react';
import useAuth from 'hooks/useAuth';
import { useHistory } from 'react-router-dom';

import { DefaultButton } from 'components/DefaultButton';
import { DefaultInput } from 'components/DefaultInput';
import { MUIButtonVariantEnums, MUIColorEnums } from 'constants/enums';

export function Login() {
  const { login } = useAuth();
  const history = useHistory();
  const [user, setUser] = useState<string>(``);
  const [password, setPassword] = useState<string>(``);

  const onLogin = useCallback(async () => {
    try {
      await login(user, password);
    } catch (error) {
      console.error(error);
    }
  }, [login, user, password]);

  const handleSingUp = async () => {
    try {
      history.push('/sign-up');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <DefaultInput placeholder="User" type="text" value={user} onChange={setUser} />
      <DefaultInput placeholder="Password" type="password" value={password} onChange={setPassword} />
      <DefaultButton muiColor={MUIColorEnums.primary} label="Login" onClick={onLogin} />
      <DefaultButton
        variant={MUIButtonVariantEnums.text}
        muiColor={MUIColorEnums.primary}
        label="Create account"
        onClick={handleSingUp}
      />
    </Fragment>
  );
}
