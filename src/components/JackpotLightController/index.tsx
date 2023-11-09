import React, { useState } from 'react';
import './styles.css';

const JackpotLightController: React.FC = () => {
  const [activeSlot, setActiveSlot] = useState(0);
  const totalSlots = 10;

  const rotateSlot = () => {
    setActiveSlot((activeSlot + 1) % totalSlots);
  };

  return (
    <div className="jackpot-light-container">
    <h1> Jackpot lighter component</h1>
      <div className="jackpot-circle">
        {[...Array(totalSlots).keys()].map((slot) => (
          <div
            key={slot}
            className={`slot slot-${slot}`}
            style={{ transform: `rotate(${(360 / totalSlots) * slot}deg)`, 
            backgroundColor: activeSlot === slot ? 'yellow' : 'lightgrey' 
          }}
          ></div>
        ))}
      </div>
      <button onClick={rotateSlot} className="rotate-button">
        Rotate
      </button>
    </div>
  );
};

export default JackpotLightController;