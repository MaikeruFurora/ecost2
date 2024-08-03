import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ProductReducer from "./ProductReducer";
import LoadingReducer from "./LoadingReducer";
export default combineReducers({
    ProductReducer: ProductReducer,
    LoadingReducer: LoadingReducer,
    form: formReducer,
});