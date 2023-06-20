import { IIngredient } from "../../utils/types";

import {
  BURGER_CONSTRUCTOR_REQUEST,
  BURGER_CONSTRUCTOR_FAILED,
  BURGER_CONSTRUCTOR_ADD_BUN,
  BURGER_CONSTRUCTOR_ADD_INGREDIENT,
  BURGER_CONSTRUCTOR_REMOVE_INGREDIENT,
  BURGER_CONSTRUCTOR_CHANGE_INGREDIENT,
  TBurgerConstructorActions,
} from "../actions/burger-constructor-actions";

interface IIngredientAdd extends IIngredient {
  uuid: string;
}

interface IInitialState {
  isLoading: boolean;
  hasError: boolean;
  ingredients: IIngredientAdd[];
  bun: IIngredient | null;
}

export const initialState: IInitialState = {
  isLoading: false,
  hasError: false,
  ingredients: [] as IIngredientAdd[],
  bun: null,
};

const burgerConstructorReducer = (
  state: IInitialState = initialState,
  action: TBurgerConstructorActions
): IInitialState => {
  switch (action.type) {
    case BURGER_CONSTRUCTOR_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case BURGER_CONSTRUCTOR_ADD_BUN: {
      return {
        ...state,
        isLoading: false,
        bun: action.payload,
      };
    }
    case BURGER_CONSTRUCTOR_ADD_INGREDIENT: {
      return {
        ...state,
        isLoading: false,
        ingredients: [...state.ingredients, { ...action.payload, uuid: action.uuid }],
      };
    }
    case BURGER_CONSTRUCTOR_REMOVE_INGREDIENT: {
      return {
        ...state,
        isLoading: false,
        ingredients: state.ingredients.filter((item) => state.ingredients.indexOf(item) !== action.payload),
      };
    }

    case BURGER_CONSTRUCTOR_CHANGE_INGREDIENT: {
      const newIngredient = [...state.ingredients];
      const { dragIndex, hoverIndex } = action.payload;

      newIngredient.splice(hoverIndex, 0, ...newIngredient.splice(dragIndex, 1));

      return {
        ...state,
        isLoading: false,
        ingredients: newIngredient,
      };
    }

    case BURGER_CONSTRUCTOR_FAILED: {
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

export default burgerConstructorReducer;
