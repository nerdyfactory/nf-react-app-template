import React, { Fragment, useState } from 'react';
import toast from 'react-hot-toast';
import useAuth from 'hooks/useAuth';
import { DefaultButton } from 'components/DefaultButton';
import { DefaultInput } from 'components/DefaultInput';
import { ERROR_MESSAGES } from 'constants/utility';
import { MUIColorEnums } from 'constants/enums';
import { useHistory } from 'react-router-dom';

export function SignUp() {
  const { signUp } = useAuth();
  const history = useHistory();
  const [user, setUser] = useState<string>(``);
  const [password, setPassword] = useState<string>(``);
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>(``);

  const onSignUp = async () => {
    try {
      if (password === passwordConfirmation) {
        await signUp(user, password, passwordConfirmation);
        history.push('/login');
      } else {
        toast.error(ERROR_MESSAGES.PASSWORD_NOT_MATCHING);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <DefaultInput placeholder="User" type="text" value={user} onChange={setUser} />
      <DefaultInput placeholder="Password" type="password" value={password} onChange={setPassword} />
      <DefaultInput
        placeholder="Confirm Password"
        type="password"
        value={passwordConfirmation}
        onChange={setPasswordConfirmation}
      />
      <DefaultButton muiColor={MUIColorEnums.primary} label="Sign Up" onClick={onSignUp} />
    </Fragment>
  );
}
