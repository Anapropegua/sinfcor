import React, { useState, useEffect } from 'react';
import style from './style.module.css';

const Cronometro = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        D: Math.floor(difference / (1000 * 60 * 60 * 24)),
        H: Math.floor((difference / (1000 * 60 * 60)) % 24),
        M: Math.floor((difference / 1000 / 60) % 60),
        // S: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <label key={interval}>
        {timeLeft[interval]}{" - "}{interval}{" "}
      </label>
    );
  });

  const formatTargetDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(date).toLocaleDateString('pt-BR', options);
  };

  return (
    <div className={style.cronometro}>
      <div className={style.box}>
        <span>Tempo</span>
        <label>   
               {timerComponents.length ? timerComponents : <span>Tempo esgotado!</span>}
        </label>
      </div>
      <div className={style.box}>
        <span>Onde</span>
        <label>IFPI - Corrente</label>
      </div>
      <div className={style.box}>
        <span>Data</span>
        <label>15 a 17 Agosto</label>
      </div>
    </div>
  );
};

export default Cronometro;
