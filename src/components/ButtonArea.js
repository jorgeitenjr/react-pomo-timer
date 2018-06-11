import React from 'react';
import Button from './Button';
import general from '../styles/general';
import ButtonAreaStyle from '../styles/ButtonArea';

const ButtonArea = () => {
  return (
    <div style={ButtonAreaStyle}>
      <Button label="START" style={{ marginRight: '2%', backgroundColor: general.alternativeBackground2 }} />
      <Button label="STOP" style={{ marginRight: '2%' }} />
      <Button label="RESET" style={{ backgroundColor: general.alternativeBackground }} />
    </div>
  );
};

export default ButtonArea;
