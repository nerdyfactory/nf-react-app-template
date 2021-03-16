import useAuth from 'hooks/useAuth';
import useBootstrap from 'hooks/useBootstrap';
import { useHistory } from 'react-router-dom';
import React, { useCallback } from 'react';
import { AppBar } from '@material-ui/core';
import { DefaultButton } from 'components';
import { MUIColorEnums } from 'constants/enums';
import styled from 'styled-components';

const AdminAppBar: React.ComponentType<{
  title?: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
  open?: boolean | undefined;
  logout?: React.ReactNode;
}> = (props) => {
  const history = useHistory();
  const { logout } = useAuth();

  return (
    <AdminHeader>
      <span>Admin Console</span>
      <div>
        <DefaultButton muiColor={MUIColorEnums.default} label="Logout" onClick={logout} />
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
