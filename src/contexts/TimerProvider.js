import React, {Component} from 'react';
import {convertToMinutesAndSeconds, getEndTime, getCurrentTime} from '../util';

export const TimerContext = React.createContext();

export default class TimerProvider extends Component {
  state = {
    initialValue: convertToMinutesAndSeconds(25 * 60),
    defaultTimings: {
      shortBreak: 5,
      longBreak: 25,
      pomo: 25,
    },
  };

  startTimer = () => {
    const endTime = getEndTime(this.state.defaultTimings.longBreak);
    const interval = setInterval(() => {
      let currentTime = getCurrentTime(endTime);
      if (currentTime <= 0) {
        clearInterval(interval);
        currentTime = 0;
      }
      this.setState({initialValue: convertToMinutesAndSeconds(currentTime)});
    }, 1000);
  };
  stopTimer = () => {};
  resetTimer = () => {};
  render = () => (
    <TimerContext.Provider
      value={{
        state: {...this.state},
        startTimer: this.startTimer,
        stopTimer: this.stopTimer,
        resetTimer: this.resetTimer,
      }}>
      {this.props.children}
    </TimerContext.Provider>
  );
}
