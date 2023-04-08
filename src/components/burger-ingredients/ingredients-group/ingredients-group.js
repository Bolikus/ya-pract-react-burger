import IngredientItem from "../ingredients-item/ingredients-item";
import Styles from "./ingredients-group.module.css";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../utils/prop-types";

function IngredientsGroup(props) {
  const { typeName, ingredients } = props;

  return (
    <div className={Styles.burger_ingredients}>
      <div className={`text_type_main-medium ${Styles.ingredients_group_name}`}>{typeName}</div>

      <div className={`ml-4 mr-4 mt-6 ${Styles.ingredients_group_item}`}>
        {ingredients.map((item) => {
          return <IngredientItem key={item._id} ingredient={item} />;
        })}
      </div>
    </div>
  );
}

IngredientsGroup.propTypes = {
  typeName: PropTypes.oneOf(["Булки", "Соусы", "Начинки"]).isRequired,
  ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
};

export default IngredientsGroup;
