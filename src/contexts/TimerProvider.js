import React, {Component} from 'react';
import {getEndTime, getCurrentTime} from '../util';

export const TimerContext = React.createContext();

export default class TimerProvider extends Component {
  constructor(props) {
    super(props);
    const longBreak = 25;
    this.state = {
      currentValue: longBreak * 60,
      defaultTimings: {
        shortBreak: 5,
        longBreak: longBreak,
        pomo: 25,
      },
      interval: null,
      status: '',
    };
  }

  startTimer = () => {
    const endTime = getEndTime(this.state.currentValue);
    const interval = setInterval(() => {
      if (this.state.status === 'running') {
        let currentTime = getCurrentTime(endTime);
        if (currentTime <= 0) {
          clearInterval(interval);
          currentTime = 0;
        }
        this.setState({currentValue: currentTime});
      } else {
        clearInterval(this.state.interval);
      }
    }, 1000);
    this.setState({interval, status: 'running'});
  };
  stopTimer = () => this.setState({status: ''});
  resetTimer = () => this.setState({status: '', currentValue: this.state.defaultTimings.longBreak * 60});
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
