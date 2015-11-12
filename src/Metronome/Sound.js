import React from 'react';
import ReactSound from 'react-sound';

export const Sound = ({ handleFinish, click }) => {
  const { PLAYING, STOPPED } = ReactSound.status;

  return (
    <ReactSound
      url="http://127.0.0.1:1337/click.mp3"
      playStatus={click ? PLAYING : STOPPED }
      onFinishedPlaying={handleFinish}
    />
  );
};
