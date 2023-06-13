import Style from "./constructor-total.module.css";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { burgerConstructorСheckout } from "../../../services/actions/order-details-actions";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hook/hooks";
import Preloader from "../../preloader/preloader";

interface IConstructorTotalProps {
  orderPrice: number;
  orderIngredients: string[];
}

function ConstructorTotal(props: IConstructorTotalProps) {
  const { orderPrice = 0, orderIngredients } = props;
  const { user, isLoading } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOpenModal = () => {
    if (user !== null) {
      dispatch(burgerConstructorСheckout(orderIngredients));
      setTimeout(() => {}, 1000);
    } else {
      navigate("/login", { replace: true });
    }
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

export default ConstructorTotal;
