import React from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { GrUserNew } from "react-icons/gr";
import { IoMdAppstore } from "react-icons/io";
import { LogOut } from "../../redux/actions/userAction";
import Cart from "../carrinho/Cart";
import "./sidenav.css";
import { SET_SHOW_CART, LOG_OUT_USER } from "../../redux/actions/actionTypes";

const Sidenav = ({ showCart, isLogged, user }) => {
  const dispatch = useDispatch();

  const showCartContainer = () => {
    dispatch({ type: SET_SHOW_CART, payload: !showCart });
  };

  const handleLogOut = () => {
    dispatch(LogOut());
  };
  return (
    <>
      <div className="sidenav-options">
        <Link to="/">
          <IoMdAppstore size={40} />
        </Link>
        <Link to="#" className="sidenav-contents">
          <FaShoppingCart size={40} onClick={showCartContainer} />
        </Link>
        {!isLogged ? (
          <Link to={{ pathname: "/signup" }}>
            <GrUserNew size={40} />
          </Link>
        ) : (
          <button onClick={() => handleLogOut()}>Sair</button>
        )}
      </div>
      <nav className={showCart ? "sidenav active" : "sidenav"}>
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
