import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/cart/reducer.js';
import Button from '../button/Button.jsx';
import './Game-Buy.css'

const GameBuy = ({game}) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const isItemInCart = items.some(item => item.id === game.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if(isItemInCart){
      dispatch(deleteFromCart(game.id))
    }else{
      dispatch(addToCart(game))
    }
  };

  return (
    <div className='gameBuy'>
      <span className='gameBuy-price'>{game.price} тг.</span>
      <Button 
        type={isItemInCart ? 'secondary' :'primary'}
        onClick={ handleClick }>
        {isItemInCart ? 'Удалить из корзины' :  'Добавить в корзину'}
      </Button>
    </div>
  );
}

export default GameBuy;
