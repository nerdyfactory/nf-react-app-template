import { AuthActionTypes, AuthContext } from 'contexts';
import { useContext } from 'react';
import { JWT_FAKE_TOKEN } from '__mocks__/request';

const useAuth = () => {
  const { dispatch } = useContext(AuthContext);
  const login = async (username: string, password: string) => {
    // DEVELOPER'S IMPLEMENTATION
    console.log(username, password);
    dispatch({ type: AuthActionTypes.SET_TOKEN, payload: `${JWT_FAKE_TOKEN}` });
  };

  return { login };
};

export default useAuth;
