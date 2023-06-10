import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { rootReducer } from "./services/reducers";
import { applyMiddleware, compose, createStore } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import socketMiddleware from "./services/middleware";
import { socketFeedActions, socketFeedOrdersActions, TWsConnectActions } from "./services/actions/socket-actions";
import { TAuthActions } from "./services/actions/auth-actions";
import { TBurgerConstructorActions } from "./services/actions/burger-constructor-actions";
import { TBurgerIngredientDetailsActions } from "./services/actions/burger-ingredient-details-actions";
import { TBurgerIngredientsActions } from "./services/actions/burger-ingredients-actions";
import { TOrderDetailsReducer } from "./services/actions/order-details-actions";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, socketMiddleware(socketFeedActions), socketMiddleware(socketFeedOrdersActions))
);
export const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>
);

export type RootState = ReturnType<typeof rootReducer>;
export type AppActions =
  | TAuthActions
  | TBurgerConstructorActions
  | TBurgerIngredientDetailsActions
  | TBurgerIngredientsActions
  | TOrderDetailsReducer
  | TWsConnectActions;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActions>;
export type AppDispatch<TReturnType = void> = (action: AppActions | AppThunk<TReturnType>) => TReturnType;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
