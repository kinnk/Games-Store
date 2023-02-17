import React from 'react';
import GameCover from '../../components/game-cover/Game-Cover.jsx';
import GameBuy from '../../components/game-buy/Game-Buy.jsx';
import GameGenre from '../../components/game-genre/Game-Genre.jsx'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentGame } from '../../redux/games/reducer.js';

import './Game-Item.css'

const GameItem = ({ game }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.title}`);
  }
  
  return (
    <div 
      className='gameItem' 
      onClick={ handleClick }
    >
      <GameCover image={game.image}/>
      <div className='gameItem-details'>
        <span className='gameItem-title'>{game.title}</span>
        <div className='gameItem-genre'>
          {
            game.genres.map(genre => 
              <GameGenre key={genre} genre={genre}/>
            )
          }
        </div>
        {/* <div className='gameItem-description'>
          {game.description}
        </div> */}
        <div className='gameItem-buy'>
          <GameBuy game={game}/>
        </div>
      </div>
    </div>
  );
}

export default GameItem;
