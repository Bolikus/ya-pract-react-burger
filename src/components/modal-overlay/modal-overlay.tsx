import React, { SyntheticEvent } from "react";
import ModalOverlayStyles from "./modal-overlay.module.css";
import { removeBurgerIngredientDetails } from "../../services/actions/burger-ingredient-details-actions";
import { burgerConstructorClear } from "../../services/actions/order-details-actions";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";

const ModalOverlay = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const burgerIngredientDetails = useAppSelector((state) => state.burgerIngredientDetails);
  const orderDetails = useAppSelector((state) => state.orderDetails);

  const handleClickOverlay = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      if (burgerIngredientDetails.ingredient !== null) {
        dispatch(removeBurgerIngredientDetails());
      }
      if (orderDetails.order !== null) {
        dispatch(burgerConstructorClear());
      }
      navigate("/", { replace: true });
    }
  };

  return <div className={ModalOverlayStyles.modalOverlay} onClick={handleClickOverlay}></div>;
};

export default ModalOverlay;
