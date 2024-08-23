import Constants from "./Constants";
const initialState = {
  refresh: false,
  search: "",
  page: 0,
  rowsPerPage: 10,
  dataList: [],
  dataListCount: 0,
  filter: "",
  selectedDataList: [],
  selectedData: {},
};
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.ACTION_TRUCK:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default dataReducer;