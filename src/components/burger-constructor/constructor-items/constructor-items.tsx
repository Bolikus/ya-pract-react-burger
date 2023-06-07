import { useRef } from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { burgerConstructorRemoveIngredient } from "../../../services/actions/burger-constructor-actions";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import Styles from "../constructor-elements/constructor-elements.module.css";
import { IIngredient } from "../../../utils/types";
import { useAppDispatch } from "../../../hook/hooks";

interface IConstructorItemProps {
  id: string;
  item: IIngredient;
  index: number;
  moveIngredient: (dragIndex: number, hoverIndex: number) => void;
}

interface IIngredientDragType {
  id: string;
  index: number;
}

interface IDragCollectedProps {
  isDragging: boolean;
}

const ConstructorItem = (props: IConstructorItemProps) => {
  const { id, item, index, moveIngredient } = props;
  const dispatch = useAppDispatch();
  const handlerRemoveInrgedient = (index: number) => {
    dispatch(burgerConstructorRemoveIngredient(index));
  };

  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop<IIngredientDragType>({
    accept: "card",
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) {
        return;
      }
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveIngredient(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag<IIngredientDragType, unknown, IDragCollectedProps>({
    type: "card",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <div className={Styles.constructorElements__item} ref={ref} style={{ opacity }}>
      <DragIcon type="primary" />
      <ConstructorElement
        handleClose={() => {
          handlerRemoveInrgedient(index);
        }}
        text={item.name}
        price={item.price}
        thumbnail={item.image}
      />
    </div>
  );
};

export default ConstructorItem;
