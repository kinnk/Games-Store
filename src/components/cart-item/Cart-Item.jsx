import React from 'react';
import {AiTwotoneDelete} from 'react-icons/ai'
import './Cart-Item.css';


const CartItem = ({id, price, title}) => {
  return (
    <div className='cartItem'>
      <AiTwotoneDelete 
        size={18}
      />
      <span>{ title }</span>
      <div className="cartItem-price">
        <span>{ price } тг.</span>
      </div>
    </div>
  );
}

export default CartItem;
