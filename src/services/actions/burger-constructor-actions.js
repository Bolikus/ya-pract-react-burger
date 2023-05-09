export const BURGER_CONSTRUCTOR_REQUEST = "BURGER_CONSTRUCTOR_REQUEST";

export const BURGER_CONSTRUCTOR_SUCCESS = "BURGER_CONSTRUCTOR_SUCCESS";

export const BURGER_CONSTRUCTOR_FAILED = "BURGER_CONSTRUCTOR_FAILED";

export const BURGER_CONSTRUCTOR_ADD_BUN = "BURGER_CONSTRUCTOR_ADD_BUN";
export const BURGER_CONSTRUCTOR_ADD_INGREDIENT = "BURGER_CONSTRUCTOR_ADD_INGREDIENT";
export const BURGER_CONSTRUCTOR_REMOVE_INGREDIENT = "BURGER_CONSTRUCTOR_REMOVE_INGREDIENT";

export const BURGER_CONSTRUCTOR_CHANGE_INGREDIENT = "BURGER_CONSTRUCTOR_CHANGE_INGREDIENT";

export const BURGER_CHECKOUT_REQUEST = "BURGER_CHECKOUT_REQUEST";

export const burgerConstructorAddBun = (ingredient) => {
  return (
    {
      type: BURGER_CONSTRUCTOR_REQUEST,
    },
    {
      type: BURGER_CONSTRUCTOR_ADD_BUN,
      payload: ingredient,
    }
  );
};

export const burgerConstructorAddIngredient = (ingredient, uuid) => {
  return (
    {
      type: BURGER_CONSTRUCTOR_REQUEST,
    },
    {
      type: BURGER_CONSTRUCTOR_ADD_INGREDIENT,
      payload: { ...ingredient },
      uuid: uuid,
    }
  );
};

export const burgerConstructorRemoveIngredient = (index) => {
  return (
    {
      type: BURGER_CONSTRUCTOR_REQUEST,
    },
    {
      type: BURGER_CONSTRUCTOR_REMOVE_INGREDIENT,
      payload: index,
    }
  );
};

export const burgerConstructorChangeIngredient = (dragIndex, hoverIndex) => {
  return (
    {
      type: BURGER_CONSTRUCTOR_REQUEST,
    },
    {
      type: BURGER_CONSTRUCTOR_CHANGE_INGREDIENT,
      payload: { dragIndex, hoverIndex },
    }
  );
};
