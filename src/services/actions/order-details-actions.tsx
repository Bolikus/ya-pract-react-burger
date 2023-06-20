import { checkResponse, getOrderRequest, NORMA_API } from "../../utils/api";
import { AppDispatch } from "../../index";
import { IOrderDetailsReducerOrder, IOrderDetailsReducerOrderOrder } from "../reducers/order-details-reducer";

export const ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST";

export const ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS";

export const ORDER_DETAILS_FAILED = "ORDER_DETAILS_FAILED";
export const ORDER_DETAILS_CLEAR = "ORDER_DETAILS_CLEAR";

export const GET_ORDER = "GET_ORDER";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";

export type TOrderDetailsReducer =
  | {
      type: typeof ORDER_DETAILS_REQUEST;
    }
  | {
      type: typeof ORDER_DETAILS_SUCCESS;
      payload: IOrderDetailsReducerOrder;
    }
  | {
      type: typeof ORDER_DETAILS_CLEAR;
    }
  | {
      type: typeof ORDER_DETAILS_FAILED;
    }
  | {
      type: typeof GET_ORDER;
    }
  | {
      type: typeof GET_ORDER_SUCCESS;
      payload: IOrderDetailsReducerOrderOrder;
    }
  | {
      type: typeof GET_ORDER_FAILED;
    };

export const burgerConstructorСheckout = (order: string[]) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    });

    const token = localStorage.getItem("accessToken");
    const accessToken = token?.split("Bearer ")[1];

    fetch(`${NORMA_API}/orders`, {
      method: "POST",
      body: JSON.stringify({ ingredients: order }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then(checkResponse)
      .then((response) => {
        dispatch({
          type: ORDER_DETAILS_SUCCESS,
          payload: response,
        });
      })
      .catch(() => {
        dispatch({
          type: ORDER_DETAILS_FAILED,
        });
      });
  };
};

export const burgerConstructorClear = () => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: ORDER_DETAILS_CLEAR,
    });
  };
};

export function getOrder(id: string) {
  return function (dispatch: AppDispatch) {
    dispatch({ type: GET_ORDER });
    getOrderRequest(`${NORMA_API}/orders`, id)
      .then((response) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          payload: response.orders[0],
        });
      })
      .catch(() => {
        dispatch({ type: GET_ORDER_FAILED });
      });
  };
}
