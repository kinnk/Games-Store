import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BiCartAlt } from 'react-icons/bi';
import CartMenu from './../cart-menu/Cart-Menu';
import ItemsInCart from './../items-in-cart/Items-In-Cart'
import './Cart-block.css';
import { calcTotalPrice } from '../utilities';

const CartBlock = () => {
	const items = useSelector((state) => state.cart.items);
	const totalPrice = calcTotalPrice(items);
  const [isCartMenuVisible, setIsCartMenuVisible] = React.useState(false);
	const navigate = useNavigate();

	const handleClick = useCallback(() => {
		setIsCartMenuVisible(false);
		navigate('/order')
	}, [navigate])
	
	return (
		<div className="cartBlock">
      <ItemsInCart quantity={items.length}/>
			<BiCartAlt 
        size={25} 
        className="cartBlock-icon"  
        onClick={()=> setIsCartMenuVisible(prev => !prev)}
      />
			{totalPrice > 0 ? <span className="cartBlock-price">{totalPrice} тг.</span> : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
		</div>
	);
};

export default CartBlock;
