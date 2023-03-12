import Styles from "./ingredients-item.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientItem(props) {
  const { ingredient } = props;
  return (
    <div className={Styles.ingredients_item}>
      <div className={`ml-4 mr-4 ${Styles.ingredients_item_image}`}>
        <img src={ingredient.image} alt={props.ingredient.name} />
      </div>
      <div className={`mt-1 mb-1 ${Styles.price}`}>
        <span className={`text text_type_digits-default`}>
          {ingredient.price}
        </span>
        <CurrencyIcon type="primary" />
      </div>
      <div>{ingredient.name}</div>

      <Counter count={1} size="default" extraClass="m-1" />
    </div>
  );
}

export default IngredientItem;
