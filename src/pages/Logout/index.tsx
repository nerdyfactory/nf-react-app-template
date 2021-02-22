import { DefaultButton } from 'components/DefaultButton';
import React from 'react';
import { MUIColorEnums } from 'types';
import useAuth from 'hooks/useAuth';

export function Logout() {
  const { logout } = useAuth();

  return (
    <div>
      <DefaultButton muiColor={MUIColorEnums.primary} label="Logout" onClick={logout} />
    </div>
  );
}
