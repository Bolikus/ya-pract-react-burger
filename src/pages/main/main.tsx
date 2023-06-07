import React from "react";
import styles from "../../components/app/app.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import { IIngredient } from "../../utils/types";

interface IMainProps {
  ingredients: IIngredient[];
  isLoading: boolean;
  hasError: boolean;
}

const Main = (props: IMainProps) => {
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

export default Main;
