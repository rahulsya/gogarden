export const ADDTOCART = "ADDTOCART";
export const GET_TOTAL = "GET_TOTAL";
export const SET_AMOUNT = "SET_AMOUNT";
export const REMOVE = "REMOVE";
export const SUBMIT_FORM = "SUBMIT_FORM";
export const CLEAR_CART = "CLEAR_CART";

export const addToCart = (payload) => {
  return {
    type: ADDTOCART,
    payload,
  };
};

export const setItem = (id, set) => {
  return {
    type: SET_AMOUNT,
    payload: {
      id,
      set,
    },
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE,
    id,
  };
};
