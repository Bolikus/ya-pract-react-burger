import { useMemo } from "react";
import ConstructorElements from "./constructor-elements/constructor-elements";
import ConstructorTotal from "./constructor-total/constructor-total";
import Modal from "../modal/modal";
import OrderDetails from "./order-details/order-details";
import Style from "./burger-constructor.module.css";
import { IIngredient } from "../../utils/types";
import { useAppSelector } from "../../hook/hooks";
import { burgerConstructorClear } from "../../services/actions/order-details-actions";

interface IBurgerConstructorProps {
  isLoading: boolean;
  hasError: boolean;
}

function BurgerConstructor(props: IBurgerConstructorProps) {
  const burgerConstructor = useAppSelector((state) => state.burgerConstructor);
  const orderDetails = useAppSelector((state) => state.orderDetails);

  const orderPrice = useMemo<number>(() => {
    let price = 0;
    //@ts-ignore
    if (burgerConstructor.bun) {
      //@ts-ignore
      price += burgerConstructor.bun.price * 2;
    }
    //@ts-ignore
    if (burgerConstructor.ingredients.length !== 0) {
      //@ts-ignore
      price += burgerConstructor.ingredients.reduce((sum: number, item: IIngredient) => sum + item.price, 0);
    }
    return price;
  }, [burgerConstructor]);

  const orderIngredients = useMemo<string[]>(() => {
    let orderIngredientsArray = [];
    //@ts-ignore
    if (burgerConstructor.bun) {
      //@ts-ignore
      orderIngredientsArray.push(burgerConstructor.bun._id);
    }
    //@ts-ignore
    if (burgerConstructor.ingredients.length !== 0) {
      //@ts-ignore
      burgerConstructor.ingredients.forEach((item: IIngredient) => {
        orderIngredientsArray.push(item._id);
      });
    }
    //@ts-ignore
    if (burgerConstructor.bun) {
      //@ts-ignore
      orderIngredientsArray.push(burgerConstructor.bun._id);
    }
    return orderIngredientsArray;
  }, [burgerConstructor]);

  return (
    <section className={`mt-25 ${Style.burger_constructor}`}>
      <ConstructorElements />
      <ConstructorTotal orderPrice={orderPrice} orderIngredients={orderIngredients} />

      {orderDetails.order !== null && orderDetails.order.success && (
        <Modal onCloseAction={burgerConstructorClear} navigateTo={"/"}>
          <OrderDetails orderId={orderDetails.order.order.number} orderName={orderDetails.order.name} />
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
