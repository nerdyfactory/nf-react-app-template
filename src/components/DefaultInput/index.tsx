import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';

type Props = {
  floatingLabel?: boolean;
  hasError?: boolean;
  errorText?: string;
  placeholder: string;
  value: string;
  onChange(value: string): void;
};

export const DefaultInput: React.FC<Props> = ({ placeholder, value, onChange, errorText, hasError, floatingLabel }) => {
  return (
    <TextInputFiled
      placeholder={!floatingLabel ? placeholder : ''}
      error={hasError}
      helperText={errorText}
      value={value}
      onChange={({ target }) => onChange(target.value)}
      id="standard-basic"
      label={floatingLabel && placeholder}
    />
  );
};

DefaultInput.propTypes = {
  floatingLabel: PropTypes.bool,
  hasError: PropTypes.bool,
  errorText: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const TextInputFiled = styled(TextField)`
  && {
    margin: 10px 0px;
  }
`;
