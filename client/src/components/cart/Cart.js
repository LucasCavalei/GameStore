import React from 'react';
import { finalizarCompra } from '../../redux/actions/cartAction.js';
import { useDispatch, connect } from 'react-redux';
import { SET_CART_BUTTON } from '../../redux/actions/actionTypes';
import './cart.css';
import store from '../../redux/store.js';

const Cart = ({
  cartItems,
  user,
  compra,
  compraSuccess,
  showCart,
  isLogged,
  cartButton,
}) => {
  const dispatch = useDispatch();
  const somaCart = cartItems.reduce(
    (total, res) => total + res.qty * res.price,
    0
  );
  {
  }
  const novaCompra = {
    cartItem: cartItems,
    somaCart: somaCart,
    user: user,
  };

  const handleFinalizarCompra = () => {
    dispatch(finalizarCompra(novaCompra));
    dispatch({ type: SET_CART_BUTTON });
  };
  const buttonSwitch = (isLogged, cartButton) => {
    switch (true) {
      case !isLogged:
        return 'usuario precisa estar logado';
      case isLogged && cartButton:
        return 'Obrigado Pela preferencia';
      case isLogged:
        return 'Finalizar compra';
      default:
        return 'foo';
    }
  };

  return (
    <div className="cart-container">
      <h3>{somaCart == 0 ? 'carrinho vazio' : 'R$' + somaCart}</h3>
      {compraSuccess ? (
        <CompraEncerrada user={user} compra={compra} />
      ) : (
        cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <p style={{ fontWeight: 'bold', color: 'white' }}>
              <h4>
                {' '}
                {item.qty} {item.name}&nbsp;&nbsp;R${item.price}
              </h4>
            </p>
          </div>
        ))
      )}
      <>
        {' '}
        {user || !cartButton ? (
          <button
            className="button button1"
            onClick={() => handleFinalizarCompra()}
          >
            {buttonSwitch(isLogged, cartButton)}
            {/* {isLogged ? 'Finalizar compra' : 'usuario precisa estar logado'} */}
          </button>
        ) : null}
      </>
    </div>
  );
};

export const CompraEncerrada = ({ compra, user }) => {
  return (
    <div>
      {user ? (
        <div className="cart-final">
          <h3> {compra.message}</h3>&nbsp;&nbsp;<h3>Total {compra.somaCart}</h3>
          <h5>Código da compra </h5>
          <h4>{compra}</h4>
          <h4>user</h4>
        </div>
      ) : (
        <h2>Obrigado pela preferencia</h2>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer.cartProducts,
    compraSuccess: state.cartReducer.success,
    user: state.userReducer.user,
    isLogged: state.userReducer.isLogged,

    compra: state.cartReducer.compra,
    cartButton: state.cartReducer.cartButton,
  };
};

export default connect(mapStateToProps)(Cart);
