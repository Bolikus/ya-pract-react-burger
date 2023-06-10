import {
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_FAILED,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_CLEAR,
  TOrderDetailsReducer,
  GET_ORDER,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
} from "../actions/order-details-actions";

import { IIngredient } from "../../utils/types";

export interface IOrderDetailsReducerOrderOrder {
  ingredients: string[];
  _id: string;
  owner: {
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
  name: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  price: number;
}

export interface IOrderDetailsReducerOrder {
  success: boolean;
  name: string;
  order: {
    ingredients: IIngredient[];
    _id: string;
    owner: {
      name: string;
      email: string;
      createdAt: string;
      updatedAt: string;
    };
    name: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    price: number;
  };
}

export interface IOrderDetailsReducer {
  isLoading: boolean;
  hasError: boolean;
  order: IOrderDetailsReducerOrder | null;
  orderDetails: IOrderDetailsReducerOrderOrder | null;
}

const initialState: IOrderDetailsReducer = {
  isLoading: false,
  hasError: false,
  order: null,
  orderDetails: null,
};

const orderDetailsReducer = (state = initialState, action: TOrderDetailsReducer): IOrderDetailsReducer => {
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

    case GET_ORDER:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        orderDetails: action.payload,
      };
    case GET_ORDER_FAILED:
      return {
        ...state,
        hasError: true,
      };

    default: {
      return state;
    }
  }
};

export default orderDetailsReducer;
