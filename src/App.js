import React from 'react';
import Cronometro from './components/cronometro';

function App() {
  const targetDate = new Date('2024-07-20T07:00:00'); // Data e hora específica

  return (
    <div className="App">
      <h1>Cronômetro em React</h1>
      <Cronometro targetDate={targetDate} />
    </div>
  );
}

export default App;
