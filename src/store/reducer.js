import { ADDTOCART } from "./action";

const initalState = {
  cart: [],
  total: 0,
};

export default function reducer(state = initalState, action) {
  if (action.type === ADDTOCART) {
    const { product } = action.payload;

    const checkItems = state.cart.find((item) => item.id === product.id);
    if (checkItems) {
      product.quantity += 1;
      return {
        ...state,
      };
    } else {
      product.quantity = 1;
      return {
        ...state,
        cart: [...state.cart, product],
      };
    }
  }

  return state;
}
