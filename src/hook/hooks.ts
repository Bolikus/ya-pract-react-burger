import { TypedUseSelectorHook, useDispatch as dispatchHook, useSelector as selectorHook } from "react-redux";
import { AppDispatch, RootState } from "../index";
import type {} from "redux-thunk/extend-redux";

export const useAppDispatch: () => AppDispatch = dispatchHook;
export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;
