import React, { Dispatch } from 'react';

export enum AuthActionTypes {
  SET_TOKEN = 'AUTH/SET_TOKEN',
  REMOVE_TOKEN = 'AUTH/REMOVE_TOKEN',
}

type AuthActions = { type: AuthActionTypes.SET_TOKEN; payload: string } | { type: AuthActionTypes.REMOVE_TOKEN };

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
      return { ...state, token: action.payload };
    case AuthActionTypes.REMOVE_TOKEN:
      return { ...state, token: undefined };
    default:
      return state;
  }
};

export const AuthContext = React.createContext<IAuthState>(INITIAL_AUTH_STATE);
