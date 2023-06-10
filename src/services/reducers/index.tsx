import { combineReducers } from "redux";
import burgerIngredientsReducer from "./burger-ingredients-reducer";
import burgerConstructorReducer from "./burger-constructor-reducer";
import orderDetailsReducer from "./order-details-reducer";
import burgerIngredientDetailsReducer from "./burger-ingredient-details-reducer";
import authReducer from "./auth-reducer";
import socketReducer from "./socket-reducer";
import socketOrdersReducer from "./socket-orders-reducer";

export type TRootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  orderDetails: orderDetailsReducer,
  burgerIngredientDetails: burgerIngredientDetailsReducer,
  auth: authReducer,
  socket: socketReducer,
  socketOrders: socketOrdersReducer,
});
