import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import useAuth from 'hooks/useAuth';
import { DefaultButton } from 'components/DefaultButton';
import { DefaultInput } from 'components/DefaultInput';
import { ERROR_MESSAGES, PASSWORD_REGEX, USER_ROLES } from 'constants/utility';
import { MUIButtonVariantEnums, MUIColorEnums } from 'constants/enums';
import { Select } from '@material-ui/core';
interface IFormInput {
  role: string;
  user: string;
  password: string;
  passwordConfirmation: string;
}

const schema = Yup.object().shape({
  role: Yup.string(),
  user: Yup.string().email(ERROR_MESSAGES.INVALID_EMAIL).required(ERROR_MESSAGES.REQUIRED_FIELD),
  password: Yup.string()
    .required(ERROR_MESSAGES.REQUIRED_FIELD)
    .test(`password`, ERROR_MESSAGES.PASSWORD_INVALID, (pw) => {
      if (pw) {
        return String(pw).length >= 8 && String(pw).length <= 15 && !!pw?.match(PASSWORD_REGEX);
      }
      return true;
    }),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref(`password`), null], ERROR_MESSAGES.PASSWORD_NOT_MATCHING)
    .required(ERROR_MESSAGES.REQUIRED_FIELD),
});

export function SignUp() {
  const { signUp } = useAuth();
  const { control, handleSubmit, errors } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const history = useHistory();

  const onSignUp = async (data: IFormInput) => {
    try {
      const { user, password, passwordConfirmation, role } = data;
      await signUp(user, password, passwordConfirmation, role);
      history.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      history.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <Controller
        name="role"
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <Select
            native
            value={value}
            onChange={onChange}
            inputProps={{
              name: 'age',
              id: 'age-native-simple',
            }}
          >
            {Object.values(USER_ROLES).map((role, i) => (
              <option key={i} value={role}>
                {role}
              </option>
            ))}
          </Select>
        )}
      />
      <Controller
        name="user"
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <DefaultInput
            placeholder="Email"
            type="text"
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
            placeholder="Password"
            type="password"
            hasError={!!errors.password}
            errorText={errors.password?.message}
            onChange={onChange}
            value={value}
          />
        )}
      />
      <Controller
        name="passwordConfirmation"
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <DefaultInput
            placeholder="Confirm Password"
            type="password"
            hasError={!!errors.passwordConfirmation}
            errorText={errors.passwordConfirmation?.message}
            onChange={onChange}
            value={value}
          />
        )}
      />
      <DefaultButton muiColor={MUIColorEnums.primary} label="Sign Up" onClick={handleSubmit(onSignUp)} />
      <DefaultButton
        variant={MUIButtonVariantEnums.text}
        muiColor={MUIColorEnums.primary}
        label="Login"
        onClick={handleLogin}
      />
    </Fragment>
  );
}
