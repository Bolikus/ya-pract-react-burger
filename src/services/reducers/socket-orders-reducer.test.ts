import {
  TWsConnectActions,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_ORDERS_CLOSED,
  WS_CONNECTION_ORDERS_END,
  WS_CONNECTION_ORDERS_SUCCESS,
  WS_CONNECTION_START,
  WS_GET_ORDERS_MESSAGE,
} from "../actions/socket-actions";

import socketOrdersReducer, { initialState } from "./socket-orders-reducer";

const testOrder = {
  _id: "647772428a4b62001c851315",
  ingredients: [
    "643d69a5c3f7b9001cfa093d",
    "643d69a5c3f7b9001cfa0943",
    "643d69a5c3f7b9001cfa0943",
    "643d69a5c3f7b9001cfa0949",
    "643d69a5c3f7b9001cfa0949",
    "643d69a5c3f7b9001cfa0949",
    "643d69a5c3f7b9001cfa0949",
    "643d69a5c3f7b9001cfa093d",
  ],
  status: "done",
  name: "Space флюоресцентный экзо-плантаго бургер",
  createdAt: "2023-05-31T16:13:54.503Z",
  updatedAt: "2023-05-31T16:13:54.573Z",
  number: 6286,
};

const testOrdersMessage = {
  orders: [testOrder, testOrder, testOrder],
  total: 5923,
  totalToday: 118,
};

describe("socketOrdersReducer", () => {
  it("should return initialState", () => {
    expect(socketOrdersReducer(undefined, {} as TWsConnectActions)).toEqual(initialState);
  });
  it("WS_CONNECTION_START", () => {
    socketOrdersReducer(initialState, {
      type: WS_CONNECTION_START,
      payload: "wss://norma.nomoreparties.space/orders/all",
    });
  });
  it("WS_CONNECTION_ORDERS_SUCCESS", () => {
    const state = socketOrdersReducer(initialState, {
      type: WS_CONNECTION_ORDERS_SUCCESS,
    });
    expect(state.wsConnected).toBe(true);
  });
  it("WS_CONNECTION_ERROR", () => {
    const state = socketOrdersReducer(initialState, {
      type: WS_CONNECTION_ERROR,
    });
    expect(state.orders).toStrictEqual([]);
    expect(state.total).toBe(0);
    expect(state.totalToday).toBe(0);
    expect(state.wsConnected).toBe(false);
  });
  it("WS_CONNECTION_ORDERS_CLOSED", () => {
    const state = socketOrdersReducer(initialState, {
      type: WS_CONNECTION_ORDERS_CLOSED,
    });
    expect(state.orders).toStrictEqual([]);
    expect(state.total).toBe(0);
    expect(state.totalToday).toBe(0);
    expect(state.wsConnected).toBe(false);
  });
  it("WS_CONNECTION_ORDERS_END", () => {
    const state = socketOrdersReducer(initialState, {
      type: WS_CONNECTION_ORDERS_END,
      payload: "disconnect",
    });
    expect(state.orders).toStrictEqual([]);
    expect(state.total).toBe(0);
    expect(state.totalToday).toBe(0);
    expect(state.wsConnected).toBe(false);
  });
  it("WS_GET_ORDERS_MESSAGE", () => {
    socketOrdersReducer(initialState, {
      type: WS_GET_ORDERS_MESSAGE,
      payload: testOrdersMessage,
    });
  });
});
