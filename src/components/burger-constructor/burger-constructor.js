import ConstructorItems from "./constructor-items/constructor-items";
import ConstructorTotal from "./constructor-total/constructor-total";
import { ingredientPropType } from "../../utils/prop-types";
import Modal from "../modal/modal";
import OrderDetails from "./order-details/order-details";
import Style from "./burger-constructor.module.css";
import { useState } from "react";

function BurgerConstructor(props) {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  const openOrderModal = () => {
    setIsOrderModalOpen(true);
  };

  const { data } = props;
  return (
    <section className={`mt-25 ${Style.burger_constructor}`}>
      <ConstructorItems data={data} />
      <ConstructorTotal openOrderModal={openOrderModal} />
      {isOrderModalOpen && (
        <Modal closeModal={closeOrderModal}>
          <OrderDetails orderId={202304} />
        </Modal>
      )}
    </section>
  );
}

BurgerConstructor.propType = {
  data: ingredientPropType.isRequired,
};

export default BurgerConstructor;
