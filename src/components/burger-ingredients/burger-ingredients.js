import { useEffect, useMemo, useState, useRef } from "react";
import Tabs from "./tabs/tabs.js";
import IngredientsGroup from "./ingredients-group/ingredients-group.js";
import Modal from "../modal/modal.js";
import IngredientDetails from "./ingredient-details/ingredient-details.js";
import bgStyle from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types.js";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

export const BUN = "bun";
export const SAUCE = "sauce";
export const MAIN = "main";

function BurgerIngrediens(props) {
  const { ingredients, isLoading, hasError } = props;
  const ingredienInModal = useSelector((state) => state.burgerIngredientDetails);
  const [current, setCurrent] = useState(BUN);

  const buns = useMemo(() => ingredients.filter((item) => item.type === BUN), [ingredients]);
  const sauce = useMemo(() => ingredients.filter((item) => item.type === SAUCE), [ingredients]);
  const main = useMemo(() => ingredients.filter((item) => item.type === MAIN), [ingredients]);

  const burgerIngredientDetails = useSelector((state) => state.burgerIngredientDetails);

  const ingredientsSection = useRef();

  const [refBun, inViewBun] = useInView({
    threshold: 0,
    root: ingredientsSection.current,
  });

  const [refSauce, inViewSauce] = useInView({
    threshold: 0.25,
    rootMargin: "-150px",
    root: ingredientsSection.current,
  });

  const [refMain, inViewMain] = useInView({
    threshold: 0.5,
    root: ingredientsSection.current,
  });

  useEffect(() => {
    if (inViewBun && inViewSauce) {
      setCurrent(BUN);
    }
    if (inViewSauce & !inViewBun) {
      setCurrent(SAUCE);
    }
    if (inViewMain) {
      setCurrent(MAIN);
    }
  }, [inViewBun, inViewSauce, inViewMain]);

  return (
    <>
      {!isLoading && !hasError && ingredients.length > 0 && (
        <section className={`mt-10 ${bgStyle.burger_ingredients}`}>
          <div className={`text text_type_main-large ${bgStyle.al_left}`}>Соберите бургер</div>
          <Tabs current={current} setCurrent={setCurrent} />
          <div ref={ingredientsSection} className={`mt-10 custom-scroll ${bgStyle.burger_ingredients_groups}`}>
            <div ref={refBun}>
              <IngredientsGroup typeName="Булки" ingredients={buns} idName={BUN} />
            </div>
            <div ref={refSauce}>
              <IngredientsGroup typeName="Соусы" ingredients={sauce} idName={SAUCE} />
            </div>
            <div ref={refMain}>
              <IngredientsGroup typeName="Начинки" ingredients={main} idName={MAIN} />
            </div>
          </div>
        </section>
      )}

      {ingredienInModal.ingredient && (
        <Modal title="Детали ингредиента">
          <IngredientDetails ingredienInModal={ingredienInModal.ingredient} />
        </Modal>
      )}
    </>
  );
}

BurgerIngrediens.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
};

export default BurgerIngrediens;
