import {
  CART_REQUEST,
  PURCHASE_SUCCESS,
  SET_SHOW_CART,
  ADD_TO_CART,
} from '../actions/actionTypes.js';

const initState = {
  cartProducts: [],
  compra: {},
  success: false,
  showCart: false,
};

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload;
      const existItem = state.cartProducts.find((x) => x.id === product.id);
      if (existItem) {
        return {
          ...state,
          cartProducts: state.cartProducts.map((x) =>
            x.id === existItem.id ? { ...existItem, qty: existItem.qty + 1 } : x
          ),
        };
      } else {
        return {
          ...state,
          cartProducts: [...state.cartProducts, { ...product, qty: 1 }],
        };
      }
    case CART_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case PURCHASE_SUCCESS:
      return { ...state, compra: action.payload, success: true };
    case SET_SHOW_CART:
      return {
        ...state,
        showCart: !state.showCart,
      };
    default:
      return state;
  }
};
