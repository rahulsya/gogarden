import { createStore, compose } from "redux";

import cartReducer from "../store/reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(cartReducer, composeEnhancer());
export default store;
