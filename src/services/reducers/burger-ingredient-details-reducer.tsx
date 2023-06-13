import {
  BURGER_INGREDIENT_DETAILS_REQUEST,
  BURGER_INGREDIENT_DETAILS_FAILED,
  BURGER_INGREDIENT_DETAILS_ADD,
  BURGER_INGREDIENT_DETAILS_REMOVE,
  TBurgerIngredientDetailsActions,
} from "../actions/burger-ingredient-details-actions";

import { IIngredient } from "../../utils/types";

interface IInitialState {
  isLoading: boolean;
  hasError: boolean;
  ingredient: IIngredient | null;
}

const initialState: IInitialState = {
  isLoading: false,
  hasError: false,
  ingredient: null,
};

const burgerIngredientDetailsReducer = (
  state: IInitialState = initialState,
  action: TBurgerIngredientDetailsActions
): IInitialState => {
  switch (action.type) {
    case BURGER_INGREDIENT_DETAILS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case BURGER_INGREDIENT_DETAILS_ADD: {
      return {
        ...state,
        isLoading: false,
        ingredient: action.payload,
      };
    }
    case BURGER_INGREDIENT_DETAILS_REMOVE: {
      return {
        ...state,
        isLoading: false,
        ingredient: null,
      };
    }
    case BURGER_INGREDIENT_DETAILS_FAILED: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default burgerIngredientDetailsReducer;
