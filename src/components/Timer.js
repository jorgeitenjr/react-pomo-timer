import React, { Component } from 'react';
import TimerStyles from '../styles/Timer';
import { convertToMinutesAndSeconds, getEndTime, getCurrentTime } from '../util';

class Timer extends Component {
  state = {
    initialValue: '',
    defaultTimings: {
      shortBreak: 5,
      longBreak: 25,
      pomo: 25,
    },
  };
  componentDidMount = () => this.startTimer();

  startTimer = () => {
    const endTime = getEndTime(this.state.defaultTimings.longBreak);
    const interval = setInterval(() => {
      let currentTime = getCurrentTime(endTime);
      if (currentTime <= 0) {
        clearInterval(interval);
        currentTime = 0;
      }
      this.setState({ initialValue: convertToMinutesAndSeconds(currentTime) });
    }, 1000);
  };

  render = () => (
    <div>
      <div style={TimerStyles.clock}>{this.state.initialValue}</div>
    </div>
  );
}

export default Timer;
