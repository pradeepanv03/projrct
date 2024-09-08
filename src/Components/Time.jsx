import './Countdown.css';
import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [remainingTime, setRemainingTime] = useState(
    (2 * 60 * 60 * 1000) + (53 * 60 * 1000) + (31 * 1000)
  );

  useEffect(() => {
    const endTime = Date.now() + remainingTime;

    const updateCountdown = () => {
      const currentTime = Date.now();
      const newRemainingTime = endTime - currentTime;

      setRemainingTime(newRemainingTime);
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const hours = Math.floor(remainingTime / (60 * 60 * 1000));
  const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);

  return (
    <div id="countdown">
      <div>
     Offer Ends In <span style={{color:"red"}}>{hours}</span> H :<span style={{color:"red"}}>{minutes}</span>M :<span style={{color:"red"}}>{seconds}</span>S
    </div>
    </div>
  );
};

export default CountdownTimer;

