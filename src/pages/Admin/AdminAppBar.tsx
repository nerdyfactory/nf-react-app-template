import useAuth from 'hooks/useAuth';
import { useHistory } from 'react-router-dom';
import React, { useCallback } from 'react';
import { AppBar } from '@material-ui/core';
import { DefaultButton } from 'components';
import { MUIButtonVariantEnums, MUIColorEnums } from 'constants/enums';
import styled from 'styled-components';

const AdminAppBar: React.ComponentType<{
  title?: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
  open?: boolean | undefined;
  logout?: React.ReactNode;
}> = () => {
  const history = useHistory();
  const { logout } = useAuth();

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, []);

  return (
    <AdminHeader>
      <span>Admin Console</span>
      <div>
        <DefaultButton
          muiColor={MUIColorEnums.inherit}
          variant={MUIButtonVariantEnums.text}
          label="Go Back"
          onClick={handleGoBack}
        />
        <DefaultButton
          muiColor={MUIColorEnums.inherit}
          variant={MUIButtonVariantEnums.text}
          label="Logout"
          onClick={logout}
        />
      </div>
    </AdminHeader>
  );
};

export default AdminAppBar;

const AdminHeader = styled(AppBar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;
