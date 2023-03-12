import Styles from "./ingredients-item.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientItem(props) {
  const { ingredient } = props;
  return (
    <div className={Styles.ingredientsItem}>
      <div className={`ml-4 mr-4 ${Styles.ingredientsItem_image}`}>
        <img src={ingredient.image} alt={props.ingredient.name} />
      </div>
      <div className={`mt-1 mb-1 ${Styles.ingredientsItem_price}`}>
        <span className={`text text_type_digits-default`}>
          {ingredient.price}
        </span>
        <CurrencyIcon type="primary" />
      </div>
      <p>{ingredient.name}</p>
    </div>
  );
}

export default IngredientItem;
