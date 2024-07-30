import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ProductReducer from "./ProductReducer";
export default combineReducers({
  Product: ProductReducer,
  form: formReducer,
});