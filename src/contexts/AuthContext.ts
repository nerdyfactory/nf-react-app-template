import React, { Dispatch } from 'react';
import { clearState, persistState } from 'services/utils/persist-state';
import { AUTH_LOGOUT } from 'react-admin';
import { USER_TOKEN } from 'constants/utility';

export enum AuthActionTypes {
  SET_TOKEN = 'AUTH/SET_TOKEN',
  REMOVE_TOKEN = 'AUTH/REMOVE_TOKEN',
}

type AuthActions =
  | { type: AuthActionTypes.SET_TOKEN; payload: string }
  | { type: AuthActionTypes.REMOVE_TOKEN }
  | { type: typeof AUTH_LOGOUT };

interface IAuthState {
  token?: string;
  dispatch: Dispatch<AuthActions>;
}

export const INITIAL_AUTH_STATE: IAuthState = {
  dispatch: () => {},
};

export const authReducer = (state: IAuthState, action: AuthActions): IAuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_TOKEN:
      persistState(USER_TOKEN, action.payload);
      return { ...state, token: action.payload };
    case AUTH_LOGOUT:
    case AuthActionTypes.REMOVE_TOKEN:
      clearState(USER_TOKEN);
      return { ...state, token: undefined };
    default:
      return state;
  }
};

export const AuthContext = React.createContext<IAuthState>(INITIAL_AUTH_STATE);
