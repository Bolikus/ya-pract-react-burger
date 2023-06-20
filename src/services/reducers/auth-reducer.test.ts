import {
  AUTH_LOGIN_FAILED,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_FAILED,
  AUTH_LOGOUT_REQUEST,
  AUTH_LOGOUT_SUCCESS,
  AUTH_REGISTER_FAILED,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  CHANGE_USER_FAILED,
  CHANGE_USER_REQUEST,
  CHANGE_USER_SUCCESS,
  GET_USER_AUTH_CHECKED,
  GET_USER_CLEAR,
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  TAuthActions,
} from "../actions/auth-actions";

import authReducer, { initialState } from "./auth-reducer";

const registerPayload = {
  name: "Name",
  email: "test@email.com",
  password: "password",
};
const userPayload = {
  name: "Name",
  email: "test@email.com",
};

describe("authReducer", () => {
  it("should return initialState", () => {
    expect(authReducer(undefined, {} as TAuthActions)).toEqual(initialState);
  });
  it("AUTH_REGISTER_REQUEST", () => {
    const state = authReducer(initialState, { type: AUTH_REGISTER_REQUEST });
    expect(state.isLoading).toBe(true);
  });
  it("AUTH_REGISTER_SUCCESS", () => {
    const state = authReducer(initialState, {
      type: AUTH_REGISTER_SUCCESS,
      payload: registerPayload,
    });
    expect(state.isLoading).toBe(false);
    expect(state.isAuthChecked).toBe(true);
  });
  it("AUTH_REGISTER_FAILED", () => {
    const state = authReducer(initialState, {
      type: AUTH_REGISTER_FAILED,
    });
    expect(state.isLoading).toBe(false);
    expect(state.hasError).toBe(true);
  });
  it("AUTH_LOGIN_REQUEST", () => {
    const state = authReducer(initialState, {
      type: AUTH_LOGIN_REQUEST,
    });
    expect(state.isLoading).toBe(true);
  });
  it("AUTH_LOGIN_SUCCESS", () => {
    const state = authReducer(initialState, {
      type: AUTH_LOGIN_SUCCESS,
      payload: userPayload,
    });
    expect(state.isLoading).toBe(false);
    expect(state.isAuthChecked).toBe(true);
  });
  it("AUTH_LOGIN_FAILED", () => {
    const state = authReducer(initialState, {
      type: AUTH_LOGIN_FAILED,
    });
    expect(state.isLoading).toBe(false);
    expect(state.hasError).toBe(true);
  });
  it("GET_USER_REQUEST", () => {
    const state = authReducer(initialState, {
      type: GET_USER_REQUEST,
    });
    expect(state.isLoading).toBe(true);
  });
  it("GET_USER_SUCCESS", () => {
    const state = authReducer(initialState, {
      type: GET_USER_SUCCESS,
      payload: userPayload,
    });
    expect(state.isLoading).toBe(false);
    expect(state.isAuthChecked).toBe(true);
  });
  it("GET_USER_FAILED", () => {
    const state = authReducer(initialState, {
      type: GET_USER_FAILED,
    });
    expect(state.isLoading).toBe(false);
    expect(state.hasError).toBe(true);
    expect(state.isAuthChecked).toBe(true);
  });
  it("GET_USER_CLEAR", () => {
    const state = authReducer(initialState, {
      type: GET_USER_CLEAR,
    });
    expect(state.isLoading).toBe(false);
    expect(state.hasError).toBe(false);
    expect(state.isAuthChecked).toBe(true);
    expect(state.user).toBe(null);
  });
  it("GET_USER_AUTH_CHECKED", () => {
    const state = authReducer(initialState, {
      type: GET_USER_AUTH_CHECKED,
    });
    expect(state.isLoading).toBe(false);
    expect(state.hasError).toBe(false);
    expect(state.isAuthChecked).toBe(true);
  });
  it("AUTH_LOGOUT_REQUEST", () => {
    const state = authReducer(initialState, {
      type: AUTH_LOGOUT_REQUEST,
    });
    expect(state.isLoading).toBe(true);
  });
  it("AUTH_LOGOUT_SUCCESS", () => {
    const state = authReducer(initialState, {
      type: AUTH_LOGOUT_SUCCESS,
    });
    expect(state.isLoading).toBe(false);
    expect(state.user).toBe(null);
  });
  it("AUTH_LOGOUT_FAILED", () => {
    const state = authReducer(initialState, {
      type: AUTH_LOGOUT_FAILED,
    });
    expect(state.isLoading).toBe(false);
    expect(state.hasError).toBe(true);
  });
  it("CHANGE_USER_REQUEST", () => {
    const state = authReducer(initialState, {
      type: CHANGE_USER_REQUEST,
    });
    expect(state.isLoading).toBe(true);
  });
  it("CHANGE_USER_SUCCESS", () => {
    const state = authReducer(initialState, {
      type: CHANGE_USER_SUCCESS,
      payload: userPayload,
    });
    expect(state.isLoading).toBe(false);
    expect(state.isAuthChecked).toBe(true);
  });
  it("CHANGE_USER_FAILED", () => {
    const state = authReducer(initialState, {
      type: CHANGE_USER_FAILED,
    });
    expect(state.isLoading).toBe(false);
    expect(state.hasError).toBe(true);
  });
});
