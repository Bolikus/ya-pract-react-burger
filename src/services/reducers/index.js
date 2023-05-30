import { combineReducers } from "redux";
import burgerIngredientsReducer from "./burger-ingredients-reducer";
import burgerConstructorReducer from "./burger-constructor-reducer";
import orderDetailsReducer from "./order-details-reducer";
import burgerIngredientDetailsReducer from "./burger-ingredient-details-reducer";
import modalReducer from "./modal-reducer";
import authReducer from "./auth-reducer";

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  orderDetails: orderDetailsReducer,
  burgerIngredientDetails: burgerIngredientDetailsReducer,
  modal: modalReducer,
  auth: authReducer,
});
