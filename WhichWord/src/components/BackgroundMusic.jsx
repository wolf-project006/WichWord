import { faL } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useRef } from 'react';

function BackgroundMusic({ src }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(src));

  const togglePlayback = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play()
        .catch(error => {
          console.error('Failed to play background music:', error);
        });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onMouseEnter={togglePlayback} style={{opacity:0, "position":"absolute", "margin-top":"280px","margin-right":"500px" }}>
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
    </div>
  );
}

export default BackgroundMusic;
