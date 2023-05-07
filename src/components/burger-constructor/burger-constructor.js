import { useMemo } from "react";
import ConstructorElements from "./constructor-elements/constructor-elements";
import ConstructorTotal from "./constructor-total/constructor-total";
import Modal from "../modal/modal";
import OrderDetails from "./order-details/order-details";
import Style from "./burger-constructor.module.css";
import { useSelector } from "react-redux";

function BurgerConstructor() {
  const burgerConstructor = useSelector((state) => state.burgerConstructor);
  const orderDetails = useSelector((state) => state.orderDetails);

  const orderPrice = useMemo(() => {
    let price = 0;

    if (burgerConstructor.bun) {
      price += burgerConstructor.bun.price * 2;
    }
    if (burgerConstructor.ingredients.length !== 0) {
      price += burgerConstructor.ingredients.reduce((sum, item) => sum + item.price, 0);
    }
    return price;
  }, [burgerConstructor]);

  const orderIngredients = useMemo(() => {
    let orderIngredientsArray = [];

    if (burgerConstructor.bun) {
      orderIngredientsArray.push(burgerConstructor.bun._id);
    }

    if (burgerConstructor.ingredients.length !== 0) {
      burgerConstructor.ingredients.forEach((item) => {
        orderIngredientsArray.push(item._id);
      });
    }
    if (burgerConstructor.bun) {
      orderIngredientsArray.push(burgerConstructor.bun._id);
    }
    return orderIngredientsArray;
  }, [burgerConstructor]);

  return (
    <section className={`mt-25 ${Style.burger_constructor}`}>
      <ConstructorElements />
      <ConstructorTotal orderPrice={orderPrice} orderIngredients={orderIngredients} />

      {orderDetails.order !== null && orderDetails.order.success && (
        <Modal>
          <OrderDetails orderId={orderDetails.order.order.number} orderName={orderDetails.order.name} />
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
