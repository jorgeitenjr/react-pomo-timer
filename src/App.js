import React, { Component } from 'react';
import Timer from './components/Timer';
import TimerStyles from './styles/Timer';
import ButtonArea from './components/ButtonArea';

class App extends Component {
  render = () => (
    <div style={TimerStyles.container}>
      <Timer />
      <ButtonArea />
    </div>
  );
}

export default App;
