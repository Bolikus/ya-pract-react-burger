import {
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_FAILED,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_CLEAR,
} from "../actions/order-details-actions";

const initialState = {
  isLoading: false,
  hasError: false,
  order: null,
};

const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ORDER_DETAILS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        order: action.payload,
      };
    }
    case ORDER_DETAILS_CLEAR: {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        order: null,
      };
    }

    case ORDER_DETAILS_FAILED: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default orderDetailsReducer;
