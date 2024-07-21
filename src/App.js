import React from 'react';
import './global.css';
import Cronometro from './components/cronometro';
import Main from './components/main';
import ContainerComponent from './components/container';
import WaveComponent from './components/wave';

function App() {
  const targetDate = new Date('2024-07-21T20:00:00'); // Data e hora específica

  return (
    <div className="App">
      <Main>
        <ContainerComponent></ContainerComponent>
        <WaveComponent></WaveComponent>
      </Main>
      <Cronometro targetDate={targetDate} />
    </div>
  );
}

export default App;
