import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

import Styles from "./constructor-items.module.css";

function ConstructorItems(props) {
  const { data } = props;
  return (
    <div className={`mr-4 ml-4 ${Styles.all_items}`}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={1255}
        thumbnail={data[0].image}
      />
      <div className={`custom-scroll ${Styles.dyn_items}`}>
        {data.map((ingredient: any) => {
          return (
            ingredient.type !== "bun" && (
              <ConstructorElement
                key={ingredient._id}
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
              />
            )
          );
        })}
      </div>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={1255}
        thumbnail={data[0].image}
      />
    </div>
  );
}

export default ConstructorItems;
