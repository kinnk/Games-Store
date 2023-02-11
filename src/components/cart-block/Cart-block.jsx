import React from 'react';
import { BiCartAlt } from 'react-icons/bi';
import './Cart-block.css';

const CartBlock = () => {
  return (
    <div className='cartBlock'>
      <BiCartAlt size={25} className='cartBlock-icon'/>
      <span className='cartBlock-price'>2.300 tg</span>
    </div>
  );
}

export default CartBlock;
