import React from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { Tooltip } from '@mui/material';
import { GrUserNew } from 'react-icons/gr';
import { IoLogOut } from 'react-icons/io5';
import { IoMdAppstore } from 'react-icons/io';
import { LogOut } from '../../redux/actions/userAction';
import Cart from '../cart/Cart';
import './sidenav.css';
import {
  SET_SHOW_CART,
  CLEAN_PRODUCTS_ARRAY,
} from '../../redux/actions/actionTypes';

const Sidenav = ({ showCart, isLogged, user }) => {
  const dispatch = useDispatch();

  const showCartContainer = () => {
    dispatch({ type: SET_SHOW_CART, payload: !showCart });
  };

  const handleLogOut = () => {
    dispatch(LogOut()); // It cleans user data in userReducer
    dispatch({ type: CLEAN_PRODUCTS_ARRAY }); // It cleans cart products array
    showCartContainer(); // It hides the cart by click in handleLogOut
  };
  return (
    <>
      <div className="sidenav-options">
        <Tooltip title="nossos produtos">
          <Link to="/">
            <IoMdAppstore size={40} style={{ color: '#232b2b' }} />
          </Link>
        </Tooltip>

        <Tooltip title="ver carrinho">
          <Link to="#" className="sidenav-contents">
            <FaShoppingCart
              size={40}
              onClick={showCartContainer}
              style={{ color: '#232b2b' }}
            />
          </Link>
        </Tooltip>
        {!isLogged ? (
          <Tooltip title="cadastrar-se">
            <Link to={{ pathname: '/signup' }}>
              <GrUserNew size={40} />
            </Link>
          </Tooltip>
        ) : (
          <Tooltip title="sair">
            <IoLogOut onClick={() => handleLogOut()} size={50} />
          </Tooltip>
        )}
      </div>
      <nav className={showCart ? 'cart-sidenav active' : 'cart-sidenav'}>
        <Cart />
      </nav>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    showCart: state.cartReducer.showCart,
    user: state.userReducer.user,
    isLogged: state.userReducer.isLogged,
  };
};
export default connect(mapStateToProps)(Sidenav);
