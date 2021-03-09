import { DefaultButton } from 'components/DefaultButton';
import React, { Fragment, useCallback } from 'react';
import useAuth from 'hooks/useAuth';
import { MUIColorEnums } from 'constants/enums';
import { useHistory } from 'react-router-dom';

export function Home() {
  const history = useHistory();
  const { logout } = useAuth();

  const goToAdminConsole = useCallback(() => {
    history.push('/admin');
  }, [history]);

  return (
    <Fragment>
      <DefaultButton muiColor={MUIColorEnums.primary} label="Admin console" onClick={goToAdminConsole} />
      <DefaultButton muiColor={MUIColorEnums.secondary} label="Logout" onClick={logout} />
    </Fragment>
  );
}
