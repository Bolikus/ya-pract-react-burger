export const BURGER_INGREDIENT_DETAILS_REQUEST = "BURGER_INGREDIENT_DETAILS_REQUEST";
export const BURGER_INGREDIENT_DETAILS_ADD = "BURGER_INGREDIENT_DETAILS_ADD";
export const BURGER_INGREDIENT_DETAILS_REMOVE = "BURGER_INGREDIENT_DETAILS_REMOVE";
export const BURGER_INGREDIENT_DETAILS_FAILED = "BURGER_INGREDIENT_DETAILS_FAILED";

export const addBurgerIngredientDetails = (ingredient) => {
  return (
    {
      type: BURGER_INGREDIENT_DETAILS_REQUEST,
    },
    {
      type: BURGER_INGREDIENT_DETAILS_ADD,
      payload: ingredient,
    }
  );
};

export const removeBurgerIngredientDetails = (ingredient) => {
  return (
    {
      type: BURGER_INGREDIENT_DETAILS_REQUEST,
    },
    {
      type: BURGER_INGREDIENT_DETAILS_REMOVE,
    }
  );
};
