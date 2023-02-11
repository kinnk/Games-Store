import React from 'react';
import './Game-Genre.css'

const GameGenre = ({genre}) => {
  return (
    <span className='gameGenre'>
      {genre}
    </span>
  );
}

export default GameGenre;
