import { AuthActionTypes, AuthContext } from 'contexts';
import { useContext } from 'react';
import { singIn, createUser } from 'services/api';

const useAuth = () => {
  const { dispatch } = useContext(AuthContext);

  const signUp = async (role: string, email: string, password: string, passwordConfirmation: string) => {
    await createUser(role, email, password, passwordConfirmation);
  };

  const login = async (email: string, password: string) => {
    try {
      const data = await singIn(email, password);
      dispatch({ type: AuthActionTypes.SET_TOKEN, payload: `${data?.token}` });
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
