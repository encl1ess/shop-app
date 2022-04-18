import { combineReducers, createStore } from "redux";
import counterReducer from "./counterReducer";
import filterReducer from "./filterReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({ 
    counter: counterReducer,
    products: productsReducer,
    filters: filterReducer
  }
);

export const store = createStore(rootReducer);