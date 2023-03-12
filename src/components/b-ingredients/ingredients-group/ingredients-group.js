import IngredientItem from "../ingredients-item/ingredients-item";
import Styles from "./ingredients-group.module.css";

function IngredientsGroup(props) {
  const { type, typeName, ingredients } = props;
  return (
    <div className={Styles.burger_ingredients}>
      <div className="text_type_main-medium">{typeName}</div>
      <div className={`ml-4 mr-4 mt-6 ${Styles.ingredients_group_item}`}>
        {ingredients.map((item) => {
          return <IngredientItem key={item._id} ingredient={item} />;
        })}
      </div>
    </div>
  );
}

export default IngredientsGroup;
