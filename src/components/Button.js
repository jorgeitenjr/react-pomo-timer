import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from '../styles/Button';

const Button = ({ label, style }) => <button style={{ ...ButtonStyle, ...style }}>{label}</button>;

Button.propTypes = {
  label: PropTypes.string,
};

export default Button;
