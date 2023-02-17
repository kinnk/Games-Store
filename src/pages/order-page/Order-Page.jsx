import React from 'react';
import './Order-Page.css';
import { useSelector } from 'react-redux';
import OrderItem from '../../components/order-item/Order-Item';
import { calcTotalPrice } from '../../components/utilities';

const OrderPage = () => {
  const items = useSelector(state => state.cart.items);

  if(items.length < 1 ){
    return <h1>Ваша корзина пуста</h1>
  }

  return (
    <div className='orderPage'>
      <div className="orderPage__left">
        {
          items.map(game => <OrderItem  game={game}/> )
        }
      </div>
      <div className="orderPage__right">
        <div className="orderPage__right-totalPrice">
          <span>
            {items.length} товаров на сумму  {calcTotalPrice(items)} тг.
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
