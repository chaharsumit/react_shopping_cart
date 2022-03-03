import { createStore } from "redux";
import { combineReducers } from "redux";
import sizeReducer from "./sizeReducer";
import filterReducer from "./filterReducer";
import productReducer from './productReducer'

let rootReducer = combineReducers({
  size: sizeReducer,
  filter: filterReducer,
  products: productReducer
});

const store = createStore(rootReducer);

export default store;