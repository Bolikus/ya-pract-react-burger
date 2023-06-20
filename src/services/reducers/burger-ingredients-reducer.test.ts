import {
  BURGER_INGREDIENTS_FAILED,
  BURGER_INGREDIENTS_REQUEST,
  BURGER_INGREDIENTS_SUCCESS,
  TBurgerIngredientsActions,
} from "../actions/burger-ingredients-actions";

import burgerIngredientsReducer, { initialState } from "./burger-ingredients-reducer";

const testIngredients = [
  {
    calories: 14,
    carbohydrates: 11,
    fat: 22,
    image: "https://code.s3.yandex.net/react/code/sauce-04.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
    name: "Соус фирменный Space Sauce",
    price: 80,
    proteins: 50,
    type: "sauce",
    __v: 0,
    _id: "643d69a5c3f7b9001cfa0943",
  },
];

describe("burgerIngredientsReducer", () => {
  it("should return initialState", () => {
    expect(burgerIngredientsReducer(undefined, {} as TBurgerIngredientsActions)).toEqual(initialState);
  });
  it("BURGER_INGREDIENTS_REQUEST", () => {
    const state = burgerIngredientsReducer(initialState, {
      type: BURGER_INGREDIENTS_REQUEST,
    });
    expect(state.isLoading).toBe(true);
  });
  it("BURGER_INGREDIENTS_SUCCESS", () => {
    const state = burgerIngredientsReducer(initialState, {
      type: BURGER_INGREDIENTS_SUCCESS,
      payload: testIngredients,
    });
    expect(state.isLoading).toBe(false);
  });
  it("BURGER_INGREDIENTS_FAILED", () => {
    const state = burgerIngredientsReducer(initialState, {
      type: BURGER_INGREDIENTS_FAILED,
    });
    expect(state.isLoading).toBe(false);
    expect(state.hasError).toBe(true);
  });
});
