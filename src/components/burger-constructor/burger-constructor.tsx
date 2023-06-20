import { useMemo } from "react";
import ConstructorElements from "./constructor-elements/constructor-elements";
import ConstructorTotal from "./constructor-total/constructor-total";
import Modal from "../modal/modal";
import OrderDetails from "./order-details/order-details";
import Style from "./burger-constructor.module.css";
import { IIngredient } from "../../utils/types";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import { burgerConstructorClear } from "../../services/actions/order-details-actions";
import { useNavigate } from "react-router-dom";
import Preloader from "../preloader/preloader";

interface IBurgerConstructorProps {
  isLoading: boolean;
  hasError: boolean;
}

function BurgerConstructor(props: IBurgerConstructorProps) {
  const burgerConstructor = useAppSelector((state) => state.burgerConstructor);
  const orderDetails = useAppSelector((state) => state.orderDetails);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCloseModal = () => {
    dispatch(burgerConstructorClear());
    navigate(-1);
  };

  const orderPrice = useMemo<number>(() => {
    let price = 0;
    if (burgerConstructor.bun) {
      price += burgerConstructor.bun.price * 2;
    }
    if (burgerConstructor.ingredients.length !== 0) {
      price += burgerConstructor.ingredients.reduce((sum, item) => sum + item.price, 0);
    }
    return price;
  }, [burgerConstructor]);

  const orderIngredients = useMemo<string[]>(() => {
    let orderIngredientsArray = [];
    if (burgerConstructor.bun) {
      orderIngredientsArray.push(burgerConstructor.bun._id);
    }
    if (burgerConstructor.ingredients.length !== 0) {
      burgerConstructor.ingredients.forEach((item: IIngredient) => {
        orderIngredientsArray.push(item._id);
      });
    }
    if (burgerConstructor.bun) {
      orderIngredientsArray.push(burgerConstructor.bun._id);
    }
    return orderIngredientsArray;
  }, [burgerConstructor]);

  return (
    <section className={`mt-25 ${Style.burger_constructor}`} data-test="burger-constructor">
      <ConstructorElements />
      <ConstructorTotal orderPrice={orderPrice} orderIngredients={orderIngredients} />

      {orderDetails.isLoading && <Preloader message="Оформляем заказ..." />}

      {orderDetails.order !== null && orderDetails.order.success && (
        <Modal onCloseAction={handleCloseModal}>
          <OrderDetails orderId={orderDetails.order.order.number} orderName={orderDetails.order.name} />
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
