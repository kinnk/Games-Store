import React from 'react';
import { calcTotalPrice } from '../utilities';
import Button from './../button/Button';
import CartItem from './../cart-item/Cart-Item';
import './Cart-Menu.css'

const CartMenu = ({items, onClick}) => {
  return (
    <div className='cartMenu'>
      <div className="cartMenu-list">
        {items.length > 0 
          ? items.map(game => (
            <CartItem 
              key={game.title}
              id={game.id} 
              price={game.price} 
              title={game.title}
            />
          )) 
          : 'Корзина пуста'}
      </div>
      {
        items.length > 0 ?
        <div className='cartMenu-arrange'>
          <div className='cartMenu-totalPrice'>
            <span>Итого: </span>
            <span>{calcTotalPrice(items)} тг.</span>
          </div>
            <Button type={'primary'} size='m' onClick={onClick}>
              Оформить заказ 
            </Button>
        </div>
        : null
      }
    </div>
  );
}

export default CartMenu;
