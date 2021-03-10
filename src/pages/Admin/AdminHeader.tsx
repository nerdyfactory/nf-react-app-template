import React, { useCallback } from 'react';
import { DefaultButton } from 'components';
import { MUIColorEnums } from 'constants/enums';
import useAuth from 'hooks/useAuth';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { AppBar, AppBarProps, Box, Typography } from '@material-ui/core';

const AdminHeader: React.ComponentType<AppBarProps> = (props) => {
  const { logout } = useAuth();
  const history = useHistory();

  const handleReturn = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <CustomAppBar {...props}>
      <Box flex="1">
        <Typography variant="h6" id="react-admin-title"></Typography>

        <Spacer />
        <HeaderButtons>
          <DefaultButton muiColor={MUIColorEnums.primary} label="Return" onClick={handleReturn} />
          <LogoutButton muiColor={MUIColorEnums.secondary} label="Logout" onClick={logout} />
        </HeaderButtons>
      </Box>
    </CustomAppBar>
  );
};

export default AdminHeader;

const CustomAppBar = styled(AppBar)`
  && {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const LogoutButton = styled(DefaultButton)`
  && {
    align-self: flex-end;
    margin-left: 5px;
    border: 10px solid red;
  }
`;

const Spacer = styled.div`
  width: 100%;
`;

const HeaderButtons = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-self: flex-end;
  border: 1px solid red;
  width: 300px;
`;
