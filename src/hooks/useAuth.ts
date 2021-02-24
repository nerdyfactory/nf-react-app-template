import { AuthActionTypes, AuthContext } from 'contexts';
import { useContext } from 'react';
import { singIn } from 'services/api';

const useAuth = () => {
  const { dispatch } = useContext(AuthContext);

  const signUp = async (username: string, password: string, passwordConfirmation: string) => {
    // DEVELOPER'S IMPLEMENTATION
    console.log(username, password, passwordConfirmation);
  };

  const login = async (email: string, password: string) => {
    try {
      const token = await singIn(email, password);
      dispatch({ type: AuthActionTypes.SET_TOKEN, payload: `${token}` });
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    dispatch({ type: AuthActionTypes.REMOVE_TOKEN });
  };

  return { login, logout, signUp };
};

export default useAuth;
