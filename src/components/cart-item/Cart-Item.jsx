import React from 'react';
import './Cart-Item.css';

const CartItem = ({id, price, title}) => {
  return (
    <div className='cartItem'>
      <span>{ title }</span>
      <div className="cartItem-price">
        <span>{ price } тг.</span>
      </div>
    </div>
  );
}

export default CartItem;
