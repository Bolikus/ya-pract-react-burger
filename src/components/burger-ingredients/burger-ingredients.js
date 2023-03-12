import Tabs from "./tabs/tabs.js";
import IngredientsGroup from "./ingredients-group/ingredients-group.js";
import bgStyle from "./burger-ingredients.module.css";

function BurgerIngrediens(props) {
  const { data } = props;
  // console.log(props.data);
  return (
    <section className={`mt-10 ${bgStyle.burger_ingredients}`}>
      <div className={`text text_type_main-large ${bgStyle.al_left}`}>
        Соберите бургер
      </div>
      <Tabs />
      <div
        className={`mt-10 custom-scroll ${bgStyle.burger_ingredients_groups}`}
      >
        <IngredientsGroup
          type="bun"
          typeName="Булки"
          ingredients={data.filter((item) => item.type === "bun")}
        />
        <IngredientsGroup
          type="sauce"
          typeName="Соусы"
          ingredients={data.filter((item) => item.type === "sauce")}
        />
        <IngredientsGroup
          type="main"
          typeName="Начинки"
          ingredients={data.filter((item) => item.type === "main")}
        />
      </div>
    </section>
  );
}

export default BurgerIngrediens;
