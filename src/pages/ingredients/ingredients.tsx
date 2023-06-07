import React from "react";
import IngredientDetails from "../../components/burger-ingredients/ingredient-details/ingredient-details";
import styles from "./ingredients.module.css";
import Preloader from "../../components/preloader/preloader";
import { IIngredient } from "../../utils/types";

interface IIngredientsProps {
  ingredients: IIngredient[];
  isLoading: boolean;
}

const Ingredients = (props: IIngredientsProps) => {
  const { ingredients, isLoading } = props;

  return (
    <div className={styles.ingredients}>
      <>
        {isLoading && ingredients.length > 0 ? (
          <Preloader />
        ) : (
          <>
            <div className={`text text_type_main-large ${styles.ingredients__title}`}>Детали ингредиента</div>
            <IngredientDetails ingredients={ingredients} isLoading={isLoading} />
          </>
        )}
      </>
    </div>
  );
};

export default Ingredients;
