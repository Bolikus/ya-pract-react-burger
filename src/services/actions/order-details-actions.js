import { checkResponse, NORMA_API } from "../../utils/api";

export const ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST";

export const ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS";

export const ORDER_DETAILS_FAILED = "ORDER_DETAILS_FAILED";
export const ORDER_DETAILS_CLEAR = "ORDER_DETAILS_CLEAR";

export const burgerConstructorСheckout = (order) => {
  return (dispatch) => {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    });

    fetch(`${NORMA_API}/orders`, {
      method: "POST",
      body: JSON.stringify({ ingredients: order }),
      headers: {
        "Content-Type": "application/json",
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
  return (dispatch) => {
    dispatch({
      type: ORDER_DETAILS_CLEAR,
    });
  };
};
