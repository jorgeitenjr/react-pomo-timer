import React, {Component} from 'react';
import styled from 'styled-components';
import {TimerContext} from '../contexts/TimerProvider';
import {convertToMinutesAndSeconds} from '../util';

class Timer extends Component {
  render = () => {
    const TimeWithStyle = styled.div`
      font-size: 95px;
      font-weight: 700;
    `;
    return (
      <TimerContext.Consumer>
        {({state}) => {
          return <TimeWithStyle>{convertToMinutesAndSeconds(state.currentValue)}</TimeWithStyle>;
        }}
      </TimerContext.Consumer>
    );
  };
}

export default Timer;
