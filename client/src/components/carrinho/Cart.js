import React from 'react';
import { finalizarCompra } from '../../redux/actions/cartAction.js';
import { useDispatch, connect } from 'react-redux';
import './cart.css';

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

      <button class="button button1" onClick={() => handleFinalizarCompra()}>
        {!user ? 'Finalizar compra' : 'usuario precisa estar logado'}
      </button>
    </div>
  );
};

export const CompraEncerrada = ({ compra, user }) => {
  // const codigoCompra = compra.insertedId.toString();

  return (
    <div>
      {user.isLogged ? (
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
  console.log('sou user reducer no cart.js', state.userReducer);

  return {
    cartItems: state.cartReducer.cartProducts,
    compraSuccess: state.cartReducer.success,
    user: state.userReducer.user,
    compra: state.cartReducer.compra,
  };
};

export default connect(mapStateToProps)(Cart);
