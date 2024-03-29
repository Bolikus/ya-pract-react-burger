import { AppDispatch } from "../../index";
import { IIngredient } from "../../utils/types";

export const BURGER_CONSTRUCTOR_REQUEST = "BURGER_CONSTRUCTOR_REQUEST";

export const BURGER_CONSTRUCTOR_SUCCESS = "BURGER_CONSTRUCTOR_SUCCESS";

export const BURGER_CONSTRUCTOR_FAILED = "BURGER_CONSTRUCTOR_FAILED";

export const BURGER_CONSTRUCTOR_ADD_BUN = "BURGER_CONSTRUCTOR_ADD_BUN";
export const BURGER_CONSTRUCTOR_ADD_INGREDIENT = "BURGER_CONSTRUCTOR_ADD_INGREDIENT";
export const BURGER_CONSTRUCTOR_REMOVE_INGREDIENT = "BURGER_CONSTRUCTOR_REMOVE_INGREDIENT";

export const BURGER_CONSTRUCTOR_CHANGE_INGREDIENT = "BURGER_CONSTRUCTOR_CHANGE_INGREDIENT";

export const BURGER_CHECKOUT_REQUEST = "BURGER_CHECKOUT_REQUEST";

export type TBurgerConstructorActions =
  | { type: typeof BURGER_CONSTRUCTOR_REQUEST }
  | { type: typeof BURGER_CONSTRUCTOR_ADD_BUN; payload: IIngredient | null }
  | {
      type: typeof BURGER_CONSTRUCTOR_ADD_INGREDIENT;
      payload: IIngredient;
      uuid: string;
    }
  | { type: typeof BURGER_CONSTRUCTOR_REMOVE_INGREDIENT; payload: number }
  | {
      type: typeof BURGER_CONSTRUCTOR_CHANGE_INGREDIENT;
      payload: { dragIndex: number; hoverIndex: number };
    }
  | { type: typeof BURGER_CONSTRUCTOR_FAILED };

export const burgerConstructorAddBun = (ingredient: IIngredient) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: BURGER_CONSTRUCTOR_REQUEST,
    });
    dispatch({
      type: BURGER_CONSTRUCTOR_ADD_BUN,
      payload: ingredient,
    });
  };
};

export const burgerConstructorAddIngredient = (ingredient: IIngredient, uuid: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: BURGER_CONSTRUCTOR_REQUEST,
    });
    dispatch({
      type: BURGER_CONSTRUCTOR_ADD_INGREDIENT,
      payload: { ...ingredient },
      uuid: uuid,
    });
  };
};

export const burgerConstructorRemoveIngredient = (index: number) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: BURGER_CONSTRUCTOR_REQUEST,
    });
    dispatch({
      type: BURGER_CONSTRUCTOR_REMOVE_INGREDIENT,
      payload: index,
    });
  };
};

export const burgerConstructorChangeIngredient = (dragIndex: number, hoverIndex: number) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: BURGER_CONSTRUCTOR_REQUEST,
    });

    dispatch({
      type: BURGER_CONSTRUCTOR_CHANGE_INGREDIENT,
      payload: { dragIndex, hoverIndex },
    });
  };
};
