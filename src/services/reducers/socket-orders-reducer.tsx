import { IOrderInfo } from "../../utils/types";
import {
  TWsConnectActions,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_ORDERS_CLOSED,
  WS_CONNECTION_ORDERS_END,
  WS_CONNECTION_ORDERS_SUCCESS,
  WS_CONNECTION_START,
  WS_GET_ORDERS_MESSAGE,
} from "../actions/socket-actions";

interface IInitialState {
  orders: IOrderInfo[];
  total: number;
  totalToday: number;
  wsConnected: boolean;
}

export const initialState: IInitialState = {
  orders: [],
  total: 0,
  totalToday: 0,
  wsConnected: false,
};
const socketOrdersReducer = (state = initialState, action: TWsConnectActions) => {
  switch (action.type) {
    case WS_CONNECTION_START: {
      return {
        ...state,
      };
    }
    case WS_CONNECTION_ORDERS_SUCCESS: {
      return {
        ...state,
        wsConnected: true,
      };
    }
    case WS_CONNECTION_ERROR: {
      return {
        ...state,
        orders: [],
        total: 0,
        totalToday: 0,
        wsConnected: false,
      };
    }
    case WS_CONNECTION_ORDERS_CLOSED: {
      return {
        ...state,
        orders: [],
        total: 0,
        totalToday: 0,
        wsConnected: false,
      };
    }
    case WS_CONNECTION_ORDERS_END: {
      return {
        orders: [],
        total: 0,
        totalToday: 0,
        wsConnected: false,
      };
    }
    case WS_GET_ORDERS_MESSAGE: {
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    }

    default: {
      return state;
    }
  }
};

export default socketOrdersReducer;
