import {
  BURGER_INGREDIENTS_REQUEST,
  BURGER_INGREDIENTS_SUCCESS,
  BURGER_INGREDIENTS_FAILED,
} from "../actions/burger-ingredients-actions";

const initialState = {
  isLoading: false,
  hasError: false,
  ingredients: [],
};

const burgerIngredientsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case BURGER_INGREDIENTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case BURGER_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        ingredients: action.payload,
      };
    }
    case BURGER_INGREDIENTS_FAILED: {
      return {
        isLoading: false,
        hasError: true,
        ingredients: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default burgerIngredientsReducer;