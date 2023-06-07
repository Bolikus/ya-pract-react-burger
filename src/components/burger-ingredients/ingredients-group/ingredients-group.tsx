import IngredientItem from "../ingredients-item/ingredients-item";
import Styles from "./ingredients-group.module.css";
import { IIngredient } from "../../../utils/types";

interface IIngredientsGroupProps {
  typeName?: "Булки" | "Соусы" | "Начинки";
  idName: string;
  ingredients: IIngredient[];
}

function IngredientsGroup(props: IIngredientsGroupProps) {
  const { typeName, ingredients, idName } = props;

  return (
    <div className={Styles.burger_ingredients} id={idName}>
      <div className={`text_type_main-medium ${Styles.ingredients_group_name}`}>{typeName}</div>

      <div className={`ml-4 mr-4 mt-6 ${Styles.ingredients_group_item}`}>
        {ingredients.map((item) => {
          return <IngredientItem key={item._id} ingredient={item} />;
        })}
      </div>
    </div>
  );
}

export default IngredientsGroup;
