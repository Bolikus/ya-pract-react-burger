// import ConstructorItems from "./constructor-items/constructor-items";
import ConstructorElements from "./constructor-elements/constructor-elements";
import ConstructorTotal from "./constructor-total/constructor-total";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";
import Modal from "../modal/modal";
import OrderDetails from "./order-details/order-details";
import Style from "./burger-constructor.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

function BurgerConstructor() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const burgerConstructor = useSelector((state) => state.burgerConstructor);

  console.log(burgerConstructor);

  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  const openOrderModal = () => {
    setIsOrderModalOpen(true);
  };

  // const { ingredients } = props;
  return (
    <section className={`mt-25 ${Style.burger_constructor}`}>
      {/* <ConstructorElements ingredients={ingredients} /> */}
      <ConstructorElements />
      <ConstructorTotal openOrderModal={openOrderModal} />
      {isOrderModalOpen && (
        <Modal closeModal={closeOrderModal}>
          <OrderDetails orderId={202304} />
        </Modal>
      )}
    </section>
  );
}

// BurgerConstructor.propTypes = {
//   ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
// };

export default BurgerConstructor;
