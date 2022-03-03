import { createStore } from "redux";
import { combineReducers } from "redux";
import sizeReducer from "./sizeReducer";
import filterReducer from "./filterReducer";
import cartReducer from './cartReducer'

let rootReducer = combineReducers({
  size: sizeReducer,
  filter: filterReducer,
  cart: cartReducer
});

const store = createStore(rootReducer);

export default store;