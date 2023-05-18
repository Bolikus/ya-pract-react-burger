import React from "react";
import PropTypes from "prop-types";
import styles from "../../components/app/app.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import { ingredientPropType } from "../../utils/prop-types.js";

const Main = (props) => {
  const { ingredients, isLoading, hasError } = props;
  return (
    <main className={styles.main_container}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients ingredients={ingredients} isLoading={isLoading} hasError={hasError} />
        <BurgerConstructor isLoading={isLoading} hasError={hasError} />
      </DndProvider>
    </main>
  );
};

Main.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
};

export default Main;
