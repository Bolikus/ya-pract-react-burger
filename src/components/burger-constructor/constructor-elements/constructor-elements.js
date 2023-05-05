import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "../constructor-items/constructor-items";
import Styles from "./constructor-elements.module.css";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../utils/prop-types";

function ConstructorElements(props) {
  const { data } = props;
  return (
    // <div className={`mr-4 ml-4 ${Styles.all_items}`}>
    <div className={`mr-4 ml-4 ${Styles.constructorElements}`}>
      <div className={Styles.constructorElements__bun}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={1255}
          thumbnail={data[0].image}
        />
      </div>
      {/* <div className={`custom-scroll ${Styles.dyn_items}`}> */}
      <div className={`custom-scroll ${Styles.constructorElements__items}`}>
        {data.map((ingredient, _index) => {
          return (
            ingredient.type !== "bun" && (
              <div>
                <ConstructorItem ingredient={ingredient} />
                {/* <ConstructorElement 
                  key={ingredient._id}
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                /> */}
              </div>
            )
          );
        })}
      </div>
      <div className={`${Styles.constructorElements__bun} ${Styles.constructorElements__bun_bottom}`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={1255}
          thumbnail={data[0].image}
        />
      </div>
    </div>
  );
}

ConstructorElements.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType).isRequired,
};

export default ConstructorElements;
