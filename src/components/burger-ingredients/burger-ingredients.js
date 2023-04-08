import { useMemo } from "react";
import Tabs from "./tabs/tabs.js";
import IngredientsGroup from "./ingredients-group/ingredients-group.js";
import bgStyle from "./burger-ingredients.module.css";
import { ingredientPropType } from "../../utils/prop-types.js";

function BurgerIngrediens(props) {
  const { data } = props;

  const buns = useMemo(() => data.filter((item) => item.type === "bun"), data);
  const sauce = useMemo(() => data.filter((item) => item.type === "sauce"), data);
  const main = useMemo(() => data.filter((item) => item.type === "main"), data);

  return (
    <section className={`mt-10 ${bgStyle.burger_ingredients}`}>
      <div className={`text text_type_main-large ${bgStyle.al_left}`}>Соберите бургер</div>
      <Tabs />
      <div className={`mt-10 custom-scroll ${bgStyle.burger_ingredients_groups}`}>
        <IngredientsGroup typeName="Булки" ingredients={buns} />
        <IngredientsGroup typeName="Соусы" ingredients={sauce} />
        <IngredientsGroup typeName="Начинки" ingredients={main} />
      </div>
    </section>
  );
}

BurgerIngrediens.propType = {
  data: ingredientPropType.isRequired,
};

export default BurgerIngrediens;
