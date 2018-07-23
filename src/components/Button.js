import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import general from '../styles/general';

const Button = props => {
  const {label, style} = props;
  const StyledButton = styled.button`
    background-color: ${general.primary};
    color: ${general.background};
    padding: 20px;
    width: 150px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 5px;
    border: 0px;
    cursor: pointer;
    &:hover {
      background-color: red;
    }
  `;
  return (
    <StyledButton {...props} style={{...style}}>
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  label: PropTypes.string,
};

export default Button;
