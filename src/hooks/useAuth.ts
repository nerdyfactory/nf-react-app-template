import { AuthActionTypes, AuthContext } from 'contexts';
import { useContext } from 'react';
import { singIn } from 'services/api';

const useAuth = () => {
  const { dispatch } = useContext(AuthContext);

  const login = async (email: string, password: string) => {
    const token = await singIn(email, password);
    dispatch({ type: AuthActionTypes.SET_TOKEN, payload: `${token}` });
  };

  const logout = async () => {
    dispatch({ type: AuthActionTypes.REMOVE_TOKEN });
  };

  return { login, logout };
};

export default useAuth;
