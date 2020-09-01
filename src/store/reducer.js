import { ADDTOCART } from "./action";

const initalState = {
  cart: [],
  total: 0,
};

export default function reducer(state = initalState, action) {
  if (action.type === ADDTOCART) {
    console.log("you add the item");
  }

  return state;
}
