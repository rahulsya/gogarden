import {
  ADDTOCART,
  GET_TOTAL,
  SET_AMOUNT,
  REMOVE,
  SUBMIT_FORM,
  CLEAR_CART,
} from "./action";

const initalState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  total: 0,
  amount: 0,
  address: [],
};

export default function reducer(state = initalState, action) {
  if (action.type === ADDTOCART) {
    let { id } = action.payload;
    const checkItems = state.cart.find((item) => item.id === id);
    if (checkItems) {
      action.payload.quantity += 1;
      return {
        ...state,
        amount: (state.amount += 1),
      };
    } else {
      action.payload.quantity = 1;
      return {
        ...state,
        amount: (state.amount += 1),
        cart: [...state.cart, action.payload],
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
  // FORM
  if (action.type === SUBMIT_FORM) {
    return { ...state, address: action.payload };
  }
  // clear cart and address
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [], address: [], total: 0, amount: 0 };
  }

  if ((action.type = REMOVE)) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.id),
    };
  }

  return state;
}
