import React from 'react';
import Cronometro from './components/cronometro';

function App() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 29); // 2 dias a partir de hoje

  return (
    <div className="App">
      <h1>Cronômetro em React</h1>
      <Cronometro targetDate={targetDate} />
    </div>
  );
}

export default App;
