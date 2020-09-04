import { ADDTOCART, GET_TOTAL, SET_AMOUNT, REMOVE } from "./action";

const initalState = {
  cart: [],
  total: 0,
  amount: 0,
};

export default function reducer(state = initalState, action) {
  if (action.type === ADDTOCART) {
    const { product } = action.payload;

    const checkItems = state.cart.find((item) => item.id === product.id);
    if (checkItems) {
      product.quantity += 1;
      return {
        ...state,
        amount: (state.amount += 1),
      };
    } else {
      product.quantity = 1;
      return {
        ...state,
        amount: (state.amount += 1),
        cart: [...state.cart, product],
      };
    }
  }

  if (action.type === GET_TOTAL) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, quantity } = cartItem;
        const itemTotal = price * quantity;
        cartTotal.total += itemTotal;
        cartTotal.amount += quantity;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  if (action.type === SET_AMOUNT) {
    return {
      ...state,
      cart: state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.set === "inc") {
            return (cartItem = {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            });
          }
          if ((action.payload.set = "dec")) {
            return (cartItem = {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            });
          }
        }
        return cartItem;
      }),
    };
  }

  if ((action.type = REMOVE)) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }

  return state;
}
