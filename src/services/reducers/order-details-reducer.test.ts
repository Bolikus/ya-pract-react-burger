import {
  GET_ORDER,
  GET_ORDER_FAILED,
  GET_ORDER_SUCCESS,
  ORDER_DETAILS_CLEAR,
  ORDER_DETAILS_FAILED,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  TOrderDetailsReducer,
} from "../actions/order-details-actions";

import orderDetailsReducer, { initialState } from "./order-details-reducer";

const testOrederIngredient = {
  calories: 14,
  carbohydrates: 11,
  fat: 22,
  image: "https://code.s3.yandex.net/react/code/sauce-04.png",
  image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
  image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
  name: "Соус фирменный Space Sauce",
  price: 80,
  proteins: 50,
  type: "sauce",
  __v: 0,
  _id: "643d69a5c3f7b9001cfa0943",
};
const testOrder = {
  name: "Space флюоресцентный экзо-плантаго бургер",
  order: {
    createdAt: "2023-05-31T16:13:54.503Z",
    ingredients: [testOrederIngredient, testOrederIngredient, testOrederIngredient],
    name: "Space флюоресцентный экзо-плантаго бургер",
    number: 6286,
    owner: {
      name: "Name",
      email: "name@domain.ru",
      createdAt: "2023-04-22T23:57:44.644Z",
      updatedAt: "2023-05-24T15:44:36.470Z",
    },
    price: 19736,
    status: "done",
    updatedAt: "2023-05-31T16:13:54.573Z",
    _id: "647772428a4b62001c851315",
  },
  success: true,
};

const testGetOrder = {
  _id: "6477739d8a4b62001c851319",
  ingredients: ["643d69a5c3f7b9001cfa093c", "643d69a5c3f7b9001cfa093c", "643d69a5c3f7b9001cfa0941"],
  owner: {
    name: "Name",
    email: "name@domain.ru",
    createdAt: "2023-04-22T23:57:44.644Z",
    updatedAt: "2023-05-24T15:44:36.470Z",
  },
  status: "done",
  name: "Био-марсианский краторный бургер",
  createdAt: "2023-05-31T16:19:41.517Z",
  updatedAt: "2023-05-31T16:19:41.593Z",
  number: 6289,
  __v: 0,
  price: 12244,
};
describe("orderDetailsReducer", () => {
  it("should return initialState", () => {
    expect(orderDetailsReducer(undefined, {} as TOrderDetailsReducer)).toEqual(initialState);
  });
  it("ORDER_DETAILS_REQUEST", () => {
    const state = orderDetailsReducer(initialState, {
      type: ORDER_DETAILS_REQUEST,
    });
    expect(state.isLoading).toBe(true);
  });
  it("ORDER_DETAILS_SUCCESS", () => {
    const state = orderDetailsReducer(initialState, {
      type: ORDER_DETAILS_SUCCESS,
      payload: testOrder,
    });
    expect(state.isLoading).toBe(false);
    expect(state.hasError).toBe(false);
  });
  it("ORDER_DETAILS_CLEAR", () => {
    const state = orderDetailsReducer(initialState, {
      type: ORDER_DETAILS_CLEAR,
    });
    expect(state.isLoading).toBe(false);
    expect(state.hasError).toBe(false);
    expect(state.order).toBe(null);
  });
  it("ORDER_DETAILS_FAILED", () => {
    const state = orderDetailsReducer(initialState, {
      type: ORDER_DETAILS_FAILED,
    });
    expect(state.isLoading).toBe(false);
    expect(state.hasError).toBe(true);
  });
  it("GET_ORDER", () => {
    const state = orderDetailsReducer(initialState, {
      type: GET_ORDER,
    });
    expect(state.isLoading).toBe(true);
    expect(state.hasError).toBe(false);
  });
  it("GET_ORDER_SUCCESS", () => {
    const state = orderDetailsReducer(initialState, {
      type: GET_ORDER_SUCCESS,
      payload: testGetOrder,
    });
    expect(state.isLoading).toBe(false);
    expect(state.hasError).toBe(false);
  });
  it("GET_ORDER_FAILED", () => {
    const state = orderDetailsReducer(initialState, {
      type: GET_ORDER_FAILED,
    });
    expect(state.hasError).toBe(true);
  });
});
