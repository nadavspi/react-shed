import React from 'react';

export const TempoControl = ({ handleChange, value }) => {
  return (
    <label>
      Tempo: {' '}
      <input
	onChange={(e) => handleChange(e.target.value)}
	type="number"
	value={value}
      />
      {' '}
      BPM
    </label>
  );
}
