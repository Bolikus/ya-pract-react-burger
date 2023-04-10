import React from "react";
import Styles from "./ingredient-details.module.css";
import { ingredientPropType } from "../../../utils/prop-types";
// import PropTypes from "prop-types";

const IngredientDetails = (props) => {
  const {
    ingredienInModal = {
      name: "title",
      image_large: "url",
      calories: 0,
      proteins: 0,
      fat: 0,
      carbohydrates: 0,
    },
  } = props;

  return (
    <div className={Styles.IngredientDetails}>
      <div className={`ml-5 mr-5 ${Styles.IngredientDetails_image}`}>
        <img src={ingredienInModal.image_large} alt={ingredienInModal.name} />
      </div>
      <div className={`mt-4 text text_type_main-medium ${Styles.IngredientDetails_title}`}>{ingredienInModal.name}</div>
      <div className={`mt-8 mb-5 ${Styles.IngredientDetails_info}`}>
        <div className={`text text_type_main-default text_color_inactive ${Styles.IngredientDetails_info_item}`}>
          <span>Калории,ккал</span>
          <span>{ingredienInModal.calories}</span>
        </div>
        <div className={`text text_type_main-default text_color_inactive ${Styles.IngredientDetails_info_item}`}>
          <span>Белки, г</span>
          <span>{ingredienInModal.proteins}</span>
        </div>
        <div className={`text text_type_main-default text_color_inactive ${Styles.IngredientDetails_info_item}`}>
          <span>Жиры, г</span>
          <span>{ingredienInModal.fat}</span>
        </div>
        <div className={`text text_type_main-default text_color_inactive ${Styles.IngredientDetails_info_item}`}>
          <span>Углеводы, г</span>
          <span>{ingredienInModal.carbohydrates}</span>
        </div>
      </div>
    </div>
  );
};

IngredientDetails.propTypes = {
  ingredienInModal: ingredientPropType.isRequired,
};

export default IngredientDetails;
