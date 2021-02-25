import { DefaultButton } from 'components/DefaultButton';
import React, { Fragment } from 'react';
import useAuth from 'hooks/useAuth';
import { MUIColorEnums } from 'constants/enums';

export function Logout() {
  const { logout } = useAuth();

  return (
    <Fragment>
      <DefaultButton muiColor={MUIColorEnums.primary} label="Logout" onClick={logout} />
    </Fragment>
  );
}
