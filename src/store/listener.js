import store from "./index";

let currentCart;

function listener() {
  let previosCart = currentCart;

  currentCart = store.getState().cart;

  if (currentCart !== previosCart) {
    localStorage.setItem("cart", JSON.stringify(currentCart));
  }
}

function listen() {
  store.subscribe(listener);
}

export { listen };
