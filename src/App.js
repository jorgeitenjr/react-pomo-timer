import React, {Component} from 'react';
import Timer from './components/Timer';
import ButtonArea from './components/ButtonArea';
import styled from 'styled-components';
import general from './styles/general';
import TimerProvider from './contexts/TimerProvider';

class App extends Component {
  render = () => {
    const Container = styled.div`
      background-color: ${general.background};
      color: ${general.primary};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      font-family: Roboto, sans-serif;
    `;
    return (
      <Container>
        <TimerProvider>
          <Timer />
          <ButtonArea />
        </TimerProvider>
      </Container>
    );
  };
}

export default App;
