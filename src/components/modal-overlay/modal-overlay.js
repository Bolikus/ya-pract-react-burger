import ModalOverlayStyles from "./modal-overlay.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeBurgerIngredientDetails } from "../../services/actions/burger-ingredient-details-actions";
import { burgerConstructorClear } from "../../services/actions/order-details-actions";

const ModalOverlay = () => {
  const dispatch = useDispatch();
  const burgerIngredientDetails = useSelector((state) => state.burgerIngredientDetails);
  const orderDetails = useSelector((state) => state.orderDetails);

  const handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      if (burgerIngredientDetails.ingredient !== null) {
        dispatch(removeBurgerIngredientDetails());
      }
      if (orderDetails.order !== null) {
        dispatch(burgerConstructorClear());
      }
    }
  };

  return <div className={ModalOverlayStyles.modalOverlay} onClick={handleClickOverlay}></div>;
};

export default ModalOverlay;
