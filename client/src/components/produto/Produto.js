import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
import {
  ADD_TO_CART,
  SET_SHOW_CART,
  SET_CART,
} from "../../redux/actions/actionTypes";

function Produto({ product, showCart }) {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
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
        <button onClick={() => handleAddToCart(product)}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    showCart: state.cartReducer.showCart,
    user: state.userReducer.user,
  };
};
export default connect(mapStateToProps)(Produto);
