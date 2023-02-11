import React from 'react';
import GameCover from '../../components/game-cover/Game-Cover.jsx';
import GameBuy from '../../components/game-buy/Game-Buy.jsx';
import GameGenre from '../../components/game-genre/Game-Genre.jsx'
import './Game-Item.css'

const GameItem = ({game}) => {
  return (
    <div className='gameItem'>
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
