// import React, { useRef } from "react";
// import styles from "../constructor-elements/constructor-elements.module.sass";
// import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
// import { burgerConstructorRemoveIngredient } from "../../../services/actions/burger-constructor-actions";
// import { useDispatch } from "react-redux";
// import { useDrag, useDrop } from "react-dnd";
// import { ingredientPropTypes } from "../../../utils/types";
// import PropTypes from "prop-types";

// const ConstructorItem = (props) => {
//   const { id, item, index, moveIngredient } = props;

//   const dispatch = useDispatch();
//   const handlerRemoveInrgedient = (index) => {
//     dispatch(burgerConstructorRemoveIngredient(index));
//   };

//   const ref = useRef(null);

//   const [, drop] = useDrop({
//     accept: "card",
//     hover: (item, monitor) => {
//       const dragIndex = item.index;
//       const hoverIndex = index;

//       if (dragIndex === hoverIndex) {
//         return;
//       }
//       const hoverBoundingRect = ref.current?.getBoundingClientRect();
//       const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
//       const clientOffset = monitor.getClientOffset();
//       const hoverClientY = clientOffset.y - hoverBoundingRect.top;
//       if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
//         return;
//       }
//       if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
//         return;
//       }

//       moveIngredient(dragIndex, hoverIndex);

//       item.index = hoverIndex;
//     },
//   });

//   const [{ isDragging }, drag] = useDrag({
//     type: "card",
//     item: () => {
//       return { id, index };
//     },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });

//   const opacity = isDragging ? 0 : 1;

//   drag(drop(ref));

//   return (
//     <div className={`${styles.constructorElements__item}`} ref={ref} style={{ opacity }}>
//       <DragIcon type="primary" />
//       <ConstructorElement
//         handleClose={() => {
//           handlerRemoveInrgedient(index);
//         }}
//         text={item.name}
//         price={item.price}
//         thumbnail={item.image}
//       />
//     </div>
//   );
// };

// ConstructorItem.propTypes = {
//   item: ingredientPropTypes.isRequired,
//   index: PropTypes.number.isRequired,
//   id: PropTypes.string.isRequired,
//   //moveIngredient: PropTypes.func.isRequired,
// };

// export default ConstructorItem;

import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Styles from "../constructor-elements/constructor-elements.module.css";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../utils/prop-types";

const ConstructorItem = (props) => {
  // const { id, item, index, moveIngredient } = props;
  // const { ingredient } = props;

  return (
    <div className={Styles.constructorElements__item}>
      <DragIcon type="primary" />
      <ConstructorElement
      // key={ingredient._id}
      // text={ingredient.name}
      // price={ingredient.price}
      // thumbnail={ingredient.image}
      />
    </div>
  );
};

// ConstructorItem.propTypes = {
//   ingredient: ingredientPropType.isRequired,
// };

export default ConstructorItem;
