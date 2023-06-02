import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "../constructor-items/constructor-items";
import Styles from "./constructor-elements.module.css";
import dragndropImage from "../../../images/dragndrop.svg";
import { useDrop } from "react-dnd";
import {
  burgerConstructorAddBun,
  burgerConstructorAddIngredient,
  burgerConstructorChangeIngredient,
} from "../../../services/actions/burger-constructor-actions";
import { v4 as uuidv4 } from "uuid";
import { IIngredient } from "../../../utils/types";
import { useAppDispatch, useAppSelector } from "../../../hook/hooks";

interface IIngredientAdd extends IIngredient {
  uuid: string;
}

function ConstructorElements() {
  const dispatch = useAppDispatch();
  const burgerConstructor = useAppSelector((state) => state.burgerConstructor);

  const [{ isHover }, dropRef] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(ingredient) {
      //@ts-ignore
      ingredient.type === "bun"
        ? //@ts-ignore
          dispatch(burgerConstructorAddBun(ingredient))
        : //@ts-ignore
          dispatch(burgerConstructorAddIngredient(ingredient, uuidv4()));
    },
  });

  const moveIngredient = (dragIndex: number, hoverIndex: number) => {
    dispatch(burgerConstructorChangeIngredient(dragIndex, hoverIndex));
  };

  return (
    <div
      ref={dropRef}
      className={`ml-4 mr-4 ${Styles.constructorElements} ${isHover ? Styles.constructorElements__hover : ""}`}
    >
      <div className={Styles.constructorElements__bun}>
        {/*//@ts-ignore*/}
        {burgerConstructor.bun !== null ? (
          <ConstructorElement
            type="top"
            isLocked={true}
            //@ts-ignore
            text={`${burgerConstructor.bun.name} (верх)`}
            //@ts-ignore
            price={burgerConstructor.bun.price}
            //@ts-ignore
            thumbnail={burgerConstructor.bun.image}
          />
        ) : (
          <div className={`${Styles.constructorElements__defaultBun} ${Styles.constructorElements__defaultBun_top}`}>
            <div className={Styles.constructorElements__default_title}>Перетащите сюда булку</div>
          </div>
        )}
      </div>

      <div className={`custom-scroll ${Styles.constructorElements__items}`}>
        {/*//@ts-ignore*/}
        {burgerConstructor.ingredients.length > 0 ? (
          //@ts-ignore
          burgerConstructor.ingredients.map((item: IIngredientAdd, index: number) => {
            return (
              <ConstructorItem
                key={item.uuid}
                item={item}
                index={index}
                id={item.uuid}
                moveIngredient={moveIngredient}
              />
            );
          })
        ) : (
          <div className={Styles.constructorElements__default}>
            <div className={Styles.constructorElements__default_icon}>
              <img src={dragndropImage} alt="icon" />
            </div>
            <div className={Styles.constructorElements__default_title}>Перетащите сюда ингредиенты</div>
          </div>
        )}
      </div>

      <div className={`${Styles.constructorElements__bun} ${Styles.constructorElements__bun_bottom}`}>
        {/*//@ts-ignore*/}
        {burgerConstructor.bun !== null ? (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            // @ts-ignore
            text={`${burgerConstructor.bun.name} (низ)`}
            // @ts-ignore
            price={burgerConstructor.bun.price}
            // @ts-ignore
            thumbnail={burgerConstructor.bun.image}
          />
        ) : (
          <div className={`${Styles.constructorElements__defaultBun} ${Styles.constructorElements__defaultBun_bottom}`}>
            <div className={Styles.constructorElements__default_title}>Перетащите сюда булку</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConstructorElements;
