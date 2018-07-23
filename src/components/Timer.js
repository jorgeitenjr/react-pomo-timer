import React, {Component} from 'react';
import styled from 'styled-components';
import {TimerContext} from '../contexts/TimerProvider';

class Timer extends Component {
  render = () => {
    const TimeWithStyle = styled.div`
      font-size: 95px;
      font-weight: 700;
    `;
    return (
      <TimerContext.Consumer>
        {({state}) => {
          return <TimeWithStyle>{state.initialValue}</TimeWithStyle>;
        }}
      </TimerContext.Consumer>
    );
  };
}

export default Timer;
