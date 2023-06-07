import { useEffect, useMemo, useState, useRef } from "react";
import Tabs from "./tabs/tabs";
import IngredientsGroup from "./ingredients-group/ingredients-group";
import bgStyle from "./burger-ingredients.module.css";

import { useInView } from "react-intersection-observer";
import { IIngredient } from "../../utils/types";

export const BUN = "bun";
export const SAUCE = "sauce";
export const MAIN = "main";

interface IBurgerIngredientsProps {
  ingredients: IIngredient[];
  isLoading: boolean;
  hasError: boolean;
}

function BurgerIngredients(props: IBurgerIngredientsProps) {
  const { ingredients, isLoading, hasError } = props;
  const [current, setCurrent] = useState(BUN);

  const buns = useMemo(() => ingredients.filter((item: IIngredient) => item.type === BUN), [ingredients]);
  const sauce = useMemo(() => ingredients.filter((item: IIngredient) => item.type === SAUCE), [ingredients]);
  const main = useMemo(() => ingredients.filter((item: IIngredient) => item.type === MAIN), [ingredients]);

  const ingredientsSection = useRef<HTMLDivElement>(null);

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
    if (inViewSauce && !inViewBun) {
      setCurrent(SAUCE);
    }
    if (inViewSauce && inViewMain) {
      setCurrent(SAUCE);
    }
    if (inViewMain && !inViewSauce) {
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
    </>
  );
}

export default BurgerIngredients;
