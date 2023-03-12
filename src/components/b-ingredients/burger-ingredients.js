import Tabs from "./tabs/tabs.js";
import IngredientsGroup from "./ingredients-group/ingredients-group.js";
import bgStyle from "./burger-ingredients.module.css";

function BurgerIngrediens(props) {
  // console.log(props.data);
  return (
    <section className={`mt-10 ${bgStyle.burger_ingredients}`}>
      <div className={`text text_type_main-large ${bgStyle.al_left}`}>
        Соберите бургер
      </div>
      <Tabs />
      <div className={`mt-10 ${bgStyle.burger_ingredients_groups}`}>
        <IngredientsGroup
          className={`mt-10 ${bgStyle.burger_ingredients_groups}`}
          type="bun"
          typeName="Булки"
          ingredients={props.data.filter((item) => item.type === "bun")}
        />
        <IngredientsGroup
          type="sauce"
          typeName="Соусы"
          ingredients={props.data.filter((item) => item.type === "sauce")}
        />
        <IngredientsGroup
          type="main"
          typeName="Начинки"
          ingredients={props.data.filter((item) => item.type === "main")}
        />
      </div>
    </section>
  );
}

export default BurgerIngrediens;
