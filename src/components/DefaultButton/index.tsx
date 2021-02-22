import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { MUIButtonVariantEnums, MUIColorEnums } from 'constants/enums';

type ButtonProps = {
  muiColor: MUIColorEnums;
  variant?: MUIButtonVariantEnums;
  label: string;
  onClick(): void;
};

export const DefaultButton: React.FC<ButtonProps> = ({
  muiColor,
  label,
  onClick,
  variant = MUIButtonVariantEnums.contained,
}) => {
  return (
    <CustomButton variant={variant} onClick={onClick} color={muiColor || 'primary'}>
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
  variant: PropTypes.oneOf<MUIButtonVariantEnums>([
    MUIButtonVariantEnums.contained,
    MUIButtonVariantEnums.outlined,
    MUIButtonVariantEnums.text,
  ]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const CustomButton = styled(Button)`
  && {
    margin: 10px 0px;
  }
`;
