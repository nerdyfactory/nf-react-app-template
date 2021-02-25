import React, { Dispatch } from 'react';

export enum AppActionTypes {
  SET_APP_LOADING = 'APP/SET_APP_LOADING',
  SET_APP_THEME = 'APP/SET_APP_THEME',
}

type AppActions = { type: AppActionTypes.SET_APP_LOADING; payload: boolean };

interface IAppState {
  loading?: boolean;
  dispatch: Dispatch<AppActions>;
}

export const INITIAL_APP_STATE: IAppState = {
  dispatch: () => {},
};

export const appReducer = (state: IAppState, action: AppActions): IAppState => {
  switch (action.type) {
    case AppActionTypes.SET_APP_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const AppContext = React.createContext<IAppState>(INITIAL_APP_STATE);
