import React, { useState, useEffect } from "react";
import "../pages/Projects.css";

const RetroTimer = ({ seconds, onCountdownEnd }) => {
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 1) {
        setCount(count - 1);
      } else {
        clearInterval(interval);
        onCountdownEnd();
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count, onCountdownEnd]);

  return (
    <div className="retro-timer">
      <span className="retro-timer-number">{count}</span>
    </div>
  );
};

export default RetroTimer;
