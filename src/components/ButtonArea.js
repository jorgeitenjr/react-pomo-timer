import React from 'react';
import Button from './Button';
import general from '../styles/general';
import styled from 'styled-components';
import {TimerContext} from '../contexts/TimerProvider';

const ButtonArea = () => {
  const ButtonAreaWithStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  `;
  return (
    <TimerContext.Consumer>
      {({startTimer, stopTimer, resetTimer}) => {
        return (
          <ButtonAreaWithStyle>
            <Button label="START" style={{marginRight: '2%'}} onClick={startTimer} />
            <Button label="STOP" style={{marginRight: '2%'}} onClick={stopTimer} />
            <Button label="RESET" style={{backgroundColor: general.alternativeBackground}} onClick={resetTimer} />
          </ButtonAreaWithStyle>
        );
      }}
    </TimerContext.Consumer>
  );
};

export default ButtonArea;
