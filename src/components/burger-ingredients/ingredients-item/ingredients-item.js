import { useMemo } from "react";
import Styles from "./ingredients-item.module.css";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import { addBurgerIngredientDetails } from "../../../services/actions/burger-ingredient-details-actions";

import { ingredientPropType } from "../../../utils/prop-types";

function IngredientItem(props) {
  const { ingredient } = props;

  const dispatch = useDispatch();

  const handleOpenModal = (ingredient) => {
    dispatch(addBurgerIngredientDetails(ingredient));
  };

  const burgerConstructor = useSelector((state) => state.burgerConstructor);

  const countBun = useMemo(() => {
    if (burgerConstructor.bun !== null) {
      return burgerConstructor.bun._id === ingredient._id ? 2 : 0;
    }
  }, [burgerConstructor, ingredient._id]);

  const countIngredients = useMemo(() => {
    if (burgerConstructor.ingredients.length !== 0) {
      const burgerConstructorIngredientsFilter = burgerConstructor.ingredients.filter(
        (item) => item._id === ingredient._id
      );
      return burgerConstructorIngredientsFilter.length;
    }
  }, [burgerConstructor, ingredient._id]);

  const count = ingredient.type === "bun" ? countBun : countIngredients;

  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredient",
    item: { ...ingredient },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <div className={Styles.ingredientsItem} onClick={() => handleOpenModal(ingredient)} ref={dragRef}>
      <div className={`ml-4 mr-4 ${Styles.ingredientsItem__image}`}>
        <img src={ingredient.image} alt={ingredient.name} />
      </div>
      <div className={`mt-1 mb-1 ${Styles.ingredientsItem__price}`}>
        <span className={`text text_type_digits-default`}>{ingredient.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={Styles.ingredientsItem__name}>{ingredient.name}</div>

      {count > 0 && (
        <div className={Styles.ingredientsItem__count}>
          <Counter count={count} size="default" extraClass="m-1" />
        </div>
      )}
    </div>
  );
}

IngredientItem.propTypes = {
  ingredient: ingredientPropType.isRequired,
};

export default IngredientItem;
