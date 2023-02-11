import React from 'react';
import { NavLink } from 'react-router-dom';
import CartBlock from '../cart-block/Cart-block';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__wrapper'>
        <NavLink 
          className='header__logo'
          to='/'>Game Store
        </NavLink>
      </div>
      <div className='header__wrapper header__cart'>
        <CartBlock />
      </div>
    </div>
  );
}

export default Header;
