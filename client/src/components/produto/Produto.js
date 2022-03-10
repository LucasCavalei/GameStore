import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { SET_CART, SET_SHOW_CART } from "../../redux/actions/actionTypes";

function Produto({ product, showCart }) {
  const dispatch = useDispatch();
  const myfunc = (product) => {
    dispatch({ type: SET_CART, payload: product });

    // toggle de mostrar e esconder carrinho de compras {
    !showCart && dispatch({ type: SET_SHOW_CART, payload: !showCart });
  };

  return (
    <div className="produto-item">
      <img
        src={product.image}
        style={{
          maxWidth: "140px",
        }}
        alt="produto"
      />
      <div className="produto-desc">
        <h2>{product.name}</h2>
        <h4>${product.price}</h4>
        <button onClick={() => myfunc(product)}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    islogged: state.userReducer.islogged,
    showCart: state.cartReducer.showCart,
    user: state.userReducer.user,
  };
};
export default connect(mapStateToProps)(Produto);
