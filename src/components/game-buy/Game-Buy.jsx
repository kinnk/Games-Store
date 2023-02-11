import React from 'react';
import Button from '../button/Button.jsx';
import './Game-Buy.css'

const GameBuy = ({game}) => {
  return (
    <div className='gameBuy'>
      <span className='gameBuy-price'>{game.price} тг.</span>
      <Button 
        type='primary'
        onClick={()=>null}>В корзину</Button>
    </div>
  );
}

export default GameBuy;
