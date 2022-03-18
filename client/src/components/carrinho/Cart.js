import React from "react";
import { finalizarCompra } from "../../redux/actions/cartAction.js";
import { useDispatch, connect } from "react-redux";
import "./cart.css";

const Cart = ({ cartItems, user, compra, compraSuccess }) => {
  const dispatch = useDispatch();

  const somaCart = cartItems.reduce(
    (total, res) => total + res.qty * res.price,
    0
  );

  const novaCompra = {
    cartItem: cartItems,
    somaCart: somaCart,
    user: user,
  };

  const handleFinalizarCompra = () => {
    dispatch(finalizarCompra(novaCompra));
  };
  return (
    <div className="cart-container">
      {compraSuccess ? (
        <FinalCompra user={user} compra={compra} />
      ) : (
        cartItems.map((item, index) => (
          <CartItem key={index} item={item} somaCart={somaCart} />
        ))
      )}
      <h4>{somaCart} </h4>
      <button
        class="button button1"
        onClick={() => handleFinalizarCompra()}
      ></button>
    </div>
  );
};

export const CartItem = ({ item, somaCart }) => {
  return (
    <div>
      <div className="cart-item">
        <p style={{ fontWeight: "bold", color: "white" }}>
          {item.name}&nbsp;&nbsp;{item.price}
        </p>
      </div>
    </div>
  );
};

export const FinalCompra = ({ compra }) => {
  return (
    <div>
      <div className="cart-final">
        <h3> {compra.message}</h3>&nbsp;&nbsp;<h3>Total {compra.total}</h3>
        <h5>Código da compra </h5>
        <h4>{compra.orderId}</h4>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer.cartProducts,
    compraSuccess: state.cartReducer.success,
    user: state.userReducer.user,
    compra: state.cartReducer.compra,
  };
};

export default connect(mapStateToProps)(Cart);
