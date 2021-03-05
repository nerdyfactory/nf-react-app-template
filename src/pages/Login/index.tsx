import React, { Fragment, useCallback } from 'react';
import useAuth from 'hooks/useAuth';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { DefaultButton } from 'components/DefaultButton';
import { DefaultInput } from 'components/DefaultInput';
import { MUIButtonVariantEnums, MUIColorEnums } from 'constants/enums';
import { ERROR_MESSAGES, PASSWORD_REGEX } from 'constants/utility';
import { Controller, useForm } from 'react-hook-form';

interface IFormInput {
  [x: string]: string;
  user: string;
  password: string;
}

const schema = Yup.object().shape({
  user: Yup.string().email(ERROR_MESSAGES.INVALID_EMAIL).required(ERROR_MESSAGES.REQUIRED_FIELD),
  password: Yup.string()
    .required(ERROR_MESSAGES.REQUIRED_FIELD)
    .test(`password`, ERROR_MESSAGES.PASSWORD_INVALID, (pw) => {
      if (pw) {
        return String(pw).length >= 8 && String(pw).length <= 15 && !!pw?.match(PASSWORD_REGEX);
      }
      return true;
    }),
});

export function Login() {
  const { login } = useAuth();
  const history = useHistory();
  const { control, handleSubmit, errors, reset } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onLogin = useCallback(
    async (data: IFormInput) => {
      try {
        const { user, password } = data;
        await login(user, password);
        reset();
      } catch (error) {
        console.error(error);
      }
    },
    [login]
  );

  const handleSingUp = async () => {
    try {
      history.push('/sign-up');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <Controller
        name="user"
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <DefaultInput
            name="user"
            type="email"
            placeholder="User"
            hasError={!!errors.user}
            errorText={errors.user?.message}
            onChange={onChange}
            value={value}
          />
        )}
      />
      <Controller
        name="password"
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <DefaultInput
            name="password"
            type="password"
            placeholder="Password"
            hasError={!!errors.password}
            errorText={errors.password?.message}
            onChange={onChange}
            value={value}
          />
        )}
      />
      <DefaultButton muiColor={MUIColorEnums.primary} label="Login" onClick={handleSubmit(onLogin)} />
      <DefaultButton
        variant={MUIButtonVariantEnums.text}
        muiColor={MUIColorEnums.primary}
        label="Create account"
        onClick={handleSingUp}
      />
    </Fragment>
  );
}
