import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "../constructor-items/constructor-items";
import Styles from "./constructor-elements.module.css";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../utils/prop-types";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";

function ConstructorElements() {
  //   const { ingredients } = props;

  const dispatch = useDispatch();
  const burgerConstructor = useSelector((state) => state.burgerConstructor);

  return (
    // <div className={`mr-4 ml-4 ${Styles.all_items}`}>
    <div className={`mr-4 ml-4 ${Styles.constructorElements}`}>
      <div className={Styles.constructorElements__bun}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={1255}
          //   thumbnail={ingredients[0].image}
        />
      </div>
      {/* <div className={`custom-scroll ${Styles.dyn_items}`}> */}
      <div className={`custom-scroll ${Styles.constructorElements__items}`}>
        {/* {ingredients.map((ingredient, index) => {
          return (
            ingredient.type !== "bun" && (
              <div key={ingredient._id}>
                <ConstructorItem ingredient={ingredient} /> */}
        {/* <ConstructorElement 
                  key={ingredient._id}
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                /> */}
        {/* </div>
            )
          );
        })} */}
        <ConstructorItem />
      </div>
      <div className={`${Styles.constructorElements__bun} ${Styles.constructorElements__bun_bottom}`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={1255}
          //   thumbnail={ingredients[0].image}
        />
      </div>
    </div>
  );
}

// ConstructorElements.propTypes = {
//   ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
// };

export default ConstructorElements;
