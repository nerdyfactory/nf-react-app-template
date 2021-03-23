import { DefaultButton } from 'components/DefaultButton';
import React, { useCallback } from 'react';
import { AppContainer } from 'components';
import useAuth from 'hooks/useAuth';
import { MUIColorEnums } from 'constants/enums';
import { useHistory } from 'react-router-dom';

export function Home() {
  const { logout } = useAuth();
  const history = useHistory();

  const goToAdminConsole = useCallback(() => {
    history.push('/admin');
  }, [history]);

  return (
    <AppContainer>
      <DefaultButton muiColor={MUIColorEnums.primary} label="Admin console" onClick={goToAdminConsole} />
      <DefaultButton muiColor={MUIColorEnums.secondary} label="Logout" onClick={logout} />
    </AppContainer>
  );
}
