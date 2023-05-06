import React from "react";
import { useMemo, useState } from "react";
import Tabs from "./tabs/tabs.js";
import IngredientsGroup from "./ingredients-group/ingredients-group.js";
import Modal from "../modal/modal.js";
import IngredientDetails from "./ingredient-details/ingredient-details.js";
import bgStyle from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types.js";
import { useSelector } from "react-redux";

function BurgerIngrediens(props) {
  const { ingredients } = props;
  // const [modal, setModal] = useState(false);
  // const [ingredienInModal, setIngredientInModal] = useState();
  const ingredienInModal = useSelector((state) => state.burgerIngredientDetails);

  // console.log(ingredienInModal);

  const buns = useMemo(() => ingredients.filter((item) => item.type === "bun"), [ingredients]);
  const sauce = useMemo(() => ingredients.filter((item) => item.type === "sauce"), [ingredients]);
  const main = useMemo(() => ingredients.filter((item) => item.type === "main"), [ingredients]);

  // const openModal = () => {
  //   setIngredientInModal(true);
  // };

  // const closeModal = () => {
  //   setIngredientInModal(false);
  // };

  // const closeIngredientModal = () => {
  //   setIngredientInModal();
  // };

  const getIngredientInfo = (id) => {
    // return setIngredientInModal(ingredients.find((item) => item._id === id));
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
      {ingredienInModal.ingredient && (
        // <Modal title="Детали ингредиента" closeModal={closeIngredientModal}>
        <Modal title="Детали ингредиента">
          <IngredientDetails ingredienInModal={ingredienInModal.ingredient} />
        </Modal>
      )}
    </>
  );
}

BurgerIngrediens.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
};

export default BurgerIngrediens;
