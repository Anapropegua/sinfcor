import React from 'react';
import Cronometro from './components/cronometro';
import './global.css';

function App() {
  const targetDate = new Date('2024-08-15T07:00:00'); // Data e hora específica

  return (
    <div className="App">
      <Cronometro targetDate={targetDate} />
    </div>
  );
}

export default App;
