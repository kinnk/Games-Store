import React from 'react';
import './Game-Cover.css'

const GameCover = ({image = ''}) => {
  return (
    <div className='gameCover' style={{backgroundImage: `url(${image})`}}/>
  );
}

export default GameCover;
