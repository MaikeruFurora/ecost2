import Constants from "./Constants";
const initialState = {
  refresh: false,
  user: {},
  token: "",
  loading: false,
};
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.ACTION_AUTHENTICATION:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default dataReducer;