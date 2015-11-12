import React from 'react';

export const TempoControl = ({ handleChange, value }) => {
  return (
    <label>
      Tempo: {' '}
      <input
	max="400"
	min="40"
	onChange={(e) => handleChange(e.target.value)}
	step="10"
	type="number"
	value={value}
      />
      {' '}
      BPM

      <input
	max="400"
	min="40"
	onChange={(e) => handleChange(e.target.value)}
	step="10"
	type="range"
	value={value}
      />
    </label>
  );
}
