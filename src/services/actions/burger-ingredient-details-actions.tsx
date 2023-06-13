import { IIngredient } from "../../utils/types";
import { AppDispatch } from "../../index";

export const BURGER_INGREDIENT_DETAILS_REQUEST = "BURGER_INGREDIENT_DETAILS_REQUEST";
export const BURGER_INGREDIENT_DETAILS_ADD = "BURGER_INGREDIENT_DETAILS_ADD";
export const BURGER_INGREDIENT_DETAILS_REMOVE = "BURGER_INGREDIENT_DETAILS_REMOVE";
export const BURGER_INGREDIENT_DETAILS_FAILED = "BURGER_INGREDIENT_DETAILS_FAILED";

export type TBurgerIngredientDetailsActions =
  | { type: typeof BURGER_INGREDIENT_DETAILS_REQUEST }
  | { type: typeof BURGER_INGREDIENT_DETAILS_ADD; payload: IIngredient | null }
  | { type: typeof BURGER_INGREDIENT_DETAILS_REMOVE }
  | { type: typeof BURGER_INGREDIENT_DETAILS_FAILED };

export const addBurgerIngredientDetails = (ingredient: IIngredient) => {
  return (dispatch: AppDispatch): void => {
    dispatch({
      type: BURGER_INGREDIENT_DETAILS_REQUEST,
    });
    dispatch({
      type: BURGER_INGREDIENT_DETAILS_ADD,
      payload: ingredient,
    });
  };
};
export const removeBurgerIngredientDetails = () => {
  return (dispatch: AppDispatch): void => {
    dispatch({
      type: BURGER_INGREDIENT_DETAILS_REQUEST,
    });
    dispatch({
      type: BURGER_INGREDIENT_DETAILS_REMOVE,
    });
  };
};
