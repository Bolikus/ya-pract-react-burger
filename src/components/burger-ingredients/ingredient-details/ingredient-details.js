import { useMemo } from "react";
import Styles from "./ingredient-details.module.css";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../utils/prop-types";
import { useParams } from "react-router-dom";

const IngredientDetails = (props) => {
  const { ingredients, isLoading } = props;

  const { id } = useParams();

  const burgerIngredientDetails = useMemo(() => {
    return ingredients.find((ingredient) => ingredient._id === id);
  }, [ingredients, id]);

  if (!ingredients) {
    return null;
  }

  return (
    <>
      {!isLoading && burgerIngredientDetails && (
        <div className={Styles.IngredientDetails}>
          <div className={`ml-5 mr-5 ${Styles.IngredientDetails_image}`}>
            <img src={burgerIngredientDetails.image_large} alt={burgerIngredientDetails.name} />
          </div>
          <div className={`mt-4 text text_type_main-medium ${Styles.IngredientDetails_title}`}>
            {burgerIngredientDetails.name}
          </div>
          <div className={`mt-8 mb-5 ${Styles.IngredientDetails_info}`}>
            <div className={`text text_type_main-default text_color_inactive ${Styles.IngredientDetails_info_item}`}>
              <span>Калории,ккал</span>
              <span>{burgerIngredientDetails.calories}</span>
            </div>
            <div className={`text text_type_main-default text_color_inactive ${Styles.IngredientDetails_info_item}`}>
              <span>Белки, г</span>
              <span>{burgerIngredientDetails.proteins}</span>
            </div>
            <div className={`text text_type_main-default text_color_inactive ${Styles.IngredientDetails_info_item}`}>
              <span>Жиры, г</span>
              <span>{burgerIngredientDetails.fat}</span>
            </div>
            <div className={`text text_type_main-default text_color_inactive ${Styles.IngredientDetails_info_item}`}>
              <span>Углеводы, г</span>
              <span>{burgerIngredientDetails.carbohydrates}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

IngredientDetails.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
};

export default IngredientDetails;
