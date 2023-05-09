import Style from "./constructor-total.module.css";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { burgerConstructorСheckout } from "../../../services/actions/order-details-actions";
import { ingredientPropType } from "../../../utils/prop-types";

function ConstructorTotal(props) {
  const { orderPrice = 0, orderIngredients } = props;

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(burgerConstructorСheckout(orderIngredients));
  };

  return (
    <div className={`mt-10 ml-4 mr-4  ${Style.constructor_total}`}>
      <div className={Style.constructor_price}>
        <span className="text text_type_digits-medium">{orderPrice}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div className="mr-8">
        <Button htmlType="button" type="primary" size="large" onClick={handleOpenModal}>
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}

ConstructorTotal.propTypes = {
  orderPrice: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(ingredientPropType.isRequired),
};

export default ConstructorTotal;
