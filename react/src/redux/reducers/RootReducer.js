import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ProductReducer from "./ProductReducer";
import LoadingReducer from "./LoadingReducer";
import WarehouseReducer from "./WarehouseReducer";
import TaxCodeReducer from "./TaxCodeReducer";
import AuthenticationReducer from "./AuthenticationReducer";
import CompanyReducer from "./CompanyReducer";
import FormDocReducer from "./FormDocReducer";
import TruckReducer from "./TruckReducer";
import PriceTypeReducer from "./PriceTypeReducer";
import DestinationReducer from "./DestinationReducer";
import DestinationDetailReducer from "./DestinationDetailReducer";
import DestinationRateReducer from "./DestinationRateReducer";
import ProductPricingReducer from "./ProductPricingReducer";
export default combineReducers({
    ProductReducer           : ProductReducer,
    LoadingReducer           : LoadingReducer,
    WarehouseReducer         : WarehouseReducer,
    TaxCodeReducer           : TaxCodeReducer,
    AuthenticationReducer    : AuthenticationReducer,
    CompanyReducer           : CompanyReducer,
    FormDocReducer           : FormDocReducer,
    TruckReducer             : TruckReducer,
    PriceTypeReducer         : PriceTypeReducer,
    DestinationReducer       : DestinationReducer,
    DestinationRateReducer   : DestinationRateReducer,
    DestinationDetailReducer : DestinationDetailReducer,
    ProductPricingReducer    : ProductPricingReducer,
    form: formReducer,
});
