import { IOrderInfo } from "../../utils/types";
import {
  TWsConnectActions,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_END,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
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

const socketReducer = (state = initialState, action: TWsConnectActions) => {
  switch (action.type) {
    case WS_CONNECTION_START: {
      return {
        ...state,
      };
    }
    case WS_CONNECTION_SUCCESS: {
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
    case WS_CONNECTION_CLOSED: {
      return {
        ...state,
        orders: [],
        total: 0,
        totalToday: 0,
        wsConnected: false,
      };
    }
    case WS_CONNECTION_END: {
      return {
        orders: [],
        total: 0,
        totalToday: 0,
        wsConnected: false,
      };
    }
    case WS_GET_MESSAGE: {
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

export default socketReducer;
