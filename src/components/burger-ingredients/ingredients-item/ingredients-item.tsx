import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import Styles from "./ingredients-item.module.css";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { addBurgerIngredientDetails } from "../../../services/actions/burger-ingredient-details-actions";
import { IIngredient } from "../../../utils/types";
import { useAppDispatch, useAppSelector } from "../../../hook/hooks";

interface IIngredientsItemProps {
  ingredient: IIngredient;
}

const IngredientItem = (props: IIngredientsItemProps): JSX.Element => {
  const { ingredient } = props;

  const location = useLocation();

  const dispatch = useAppDispatch();

  const handleOpenModal = (ingredient: IIngredient): void => {
    dispatch(addBurgerIngredientDetails(ingredient));
  };

  const burgerConstructor = useAppSelector((state) => state.burgerConstructor);

  const countBun = useMemo(() => {
    //@ts-ignore
    if (burgerConstructor.bun !== null) {
      //@ts-ignore
      return burgerConstructor.bun._id === ingredient._id ? 2 : 0;
    }
  }, [burgerConstructor, ingredient._id]);

  const countIngredients = useMemo(() => {
    //@ts-ignore
    if (burgerConstructor.ingredients.length !== 0) {
      //@ts-ignore
      const burgerConstructorIngredientsFilter = burgerConstructor.ingredients.filter(
        (item: IIngredient) => item._id === ingredient._id
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
    <Link
      to={`/ingredients/${ingredient._id}`}
      className={`${Styles.ingredientsItem} ${isDrag ? Styles.ingredientsItem__drag : ""}`}
      onClick={() => handleOpenModal(ingredient)}
      ref={dragRef}
      state={{ backgroundLocation: location }}
    >
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
    </Link>
  );
};

export default IngredientItem;
