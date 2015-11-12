import React from 'react';

export const StartStop = ({ handleToggle, isPlaying }) => {
  const style = {
    display: 'block',
  };

  return (
    <button onClick={handleToggle} style={style}>
      {isPlaying ? 'Stop' : 'Start'}
    </button>
  );
}
