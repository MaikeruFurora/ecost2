import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ProductReducer from "./ProductReducer";
import LoadingReducer from "./LoadingReducer";
import WarehouseReducer from "./WarehouseReducer";
import TaxCodeReducer from "./TaxCodeReducer";
import AuthenticationReducer from "./AuthenticationReducer";
import CompanyReducer from "./CompanyReducer";
export default combineReducers({
    ProductReducer        : ProductReducer,
    LoadingReducer        : LoadingReducer,
    WarehouseReducer      : WarehouseReducer,
    TaxCodeReducer        : TaxCodeReducer,
    AuthenticationReducer : AuthenticationReducer,
    CompanyReducer        : CompanyReducer,
    form: formReducer,
});