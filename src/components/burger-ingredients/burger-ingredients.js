import React from "react";
import { useMemo, useState } from "react";
import Tabs from "./tabs/tabs.js";
import IngredientsGroup from "./ingredients-group/ingredients-group.js";
import Modal from "../modal/modal.js";
import IngredientDetails from "./ingredient-details/ingredient-details.js";
import bgStyle from "./burger-ingredients.module.css";
import { ingredientPropType } from "../../utils/prop-types.js";

function BurgerIngrediens(props) {
  const { data } = props;
  // const [modal, setModal] = useState(false);
  const [ingredienInModal, setIngredientInModal] = useState();
  const buns = useMemo(() => data.filter((item) => item.type === "bun"), [data]);
  const sauce = useMemo(() => data.filter((item) => item.type === "sauce"), [data]);
  const main = useMemo(() => data.filter((item) => item.type === "main"), [data]);

  // const openModal = () => {
  //   setIngredientInModal(true);
  // };

  // const closeModal = () => {
  //   setIngredientInModal(false);
  // };

  const closeIngredientModal = () => {
    setIngredientInModal();
  };

  const getIngredientInfo = (id) => {
    return setIngredientInModal(data.find((item) => item._id === id));
  };

  return (
    <>
      <section className={`mt-10 ${bgStyle.burger_ingredients}`}>
        <div className={`text text_type_main-large ${bgStyle.al_left}`}>Соберите бургер</div>
        <Tabs />
        <div className={`mt-10 custom-scroll ${bgStyle.burger_ingredients_groups}`}>
          <IngredientsGroup typeName="Булки" ingredients={buns} idName="buns" onIngredientClick={getIngredientInfo} />
          <IngredientsGroup typeName="Соусы" ingredients={sauce} idName="sauce" onIngredientClick={getIngredientInfo} />
          <IngredientsGroup typeName="Начинки" ingredients={main} idName="main" onIngredientClick={getIngredientInfo} />
        </div>
      </section>
      {ingredienInModal && (
        <Modal closeModal={closeIngredientModal}>
          <IngredientDetails ingredienInModal={ingredienInModal} />
        </Modal>
      )}
    </>
  );
}

BurgerIngrediens.propType = {
  data: ingredientPropType.isRequired,
};

export default BurgerIngrediens;
