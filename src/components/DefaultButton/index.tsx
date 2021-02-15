import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { MUIColorEnums } from 'types';
import styled from 'styled-components';

type ButtonProps = {
  muiColor: MUIColorEnums;
  label: string;
  onClick(): void;
};

export const DefaultButton: React.FC<ButtonProps> = ({ muiColor, label, onClick }) => {
  return (
    <CustomButton variant="contained" onClick={onClick} color={muiColor || 'primary'}>
      {label}
    </CustomButton>
  );
};

DefaultButton.propTypes = {
  muiColor: PropTypes.oneOf<MUIColorEnums>([
    MUIColorEnums.default,
    MUIColorEnums.secondary,
    MUIColorEnums.primary,
    MUIColorEnums.inherit,
  ]).isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const CustomButton = styled(Button)`
  && {
    margin: 10px 0px;
  }
`;
