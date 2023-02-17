import React from 'react';
import GameCover from '../game-cover/Game-Cover';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './Order-Item.css';
import { deleteFromCart } from '../../redux/cart/reducer';


const OrderItem = ({ game }) => {
  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(deleteFromCart(game.id))
  }

  return (
    <div className='orderItem'>
      <div className='orderItem__cover'>
        <GameCover image={game.image}/>
      </div>
      <div className='orderItem__title'>
        <span>{game.title}</span>
      </div>
      <div className="orderItem__price">
        <span>{game.price} тг.</span>
        <AiOutlineCloseCircle 
          size={25}
          className='cartItem__deleteIcon'
          onClick={handlerClick}
        />
      </div>
    </div>
  );
}

export default OrderItem;
