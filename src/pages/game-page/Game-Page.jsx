import React from 'react';
import './Game-Page.css';
import { useSelector } from 'react-redux';
import GameCover from '../../components/game-cover/Game-Cover';
import GameGenre from '../../components/game-genre/Game-Genre';
import GameBuy from '../../components/game-buy/Game-Buy';

const GamePage = () => {
  const game = useSelector(state => state.game.currentGame);
console.log(game)
  if(!game) return null;

  return (
    <div className='gamePage'>
      <h1 className='gamePage-title'>{game.title}</h1>
      <div className='gamePage-content'>
        <div className="gamePage-content-left">
          <iframe
            width='90%' height='400px'
            src={game.video}
            title='Youtube Video Player'
            frameBorder='none'
          ></iframe>
        </div>
        <div className="gamePage-content-right">
          <GameCover image={game.image}/>
          <p>{game.description}</p>
          <p className='secondary-text'>Популярные метки продукта:</p>
          {
            game.genres.map(genre => <GameGenre key={genre} genre={genre}/>)
          }
          <div className="gamePage-content-right-buy">
            <GameBuy game={game}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
