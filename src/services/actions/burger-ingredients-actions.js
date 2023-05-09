import { getIngredients } from "../../utils/api";
export const BURGER_INGREDIENTS_REQUEST = "BURGER_INGREDIENTS_REQUEST";
export const BURGER_INGREDIENTS_SUCCESS = "BURGER_INGREDIENTS_SUCCESS";
export const BURGER_INGREDIENTS_FAILED = "BURGER_INGREDIENTS_FAILED";

export const getBurgerIngredients = () => {
  return (dispatch) => {
    dispatch({
      type: BURGER_INGREDIENTS_REQUEST,
    });
    getIngredients()
      .then((response) => {
        if (response && response.success) {
          dispatch({
            type: BURGER_INGREDIENTS_SUCCESS,
            payload: response.data,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: BURGER_INGREDIENTS_FAILED,
        });
      });
  };
};
