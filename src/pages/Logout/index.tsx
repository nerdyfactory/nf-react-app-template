import { DefaultButton } from 'components/DefaultButton';
import React, { useContext } from 'react';
import { MUIColorEnums } from 'types';
import { AuthContext, AuthActionTypes } from '../../contexts';

export function Logout() {
  const { dispatch } = useContext(AuthContext);
  const onLogout = () => dispatch({ type: AuthActionTypes.REMOVE_TOKEN });

  return (
    <div>
      <DefaultButton muiColor={MUIColorEnums.primary} label="Logout" onClick={onLogout} />
    </div>
  );
}
