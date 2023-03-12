import Style from "./constructor-total.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function ConstructorTotal() {
  return (
    <div className={`mt-10 ml-4 mr-4  ${Style.constructor_total}`}>
      <div className={Style.constructor_price}>
        <span className="text text_type_digits-medium">610</span>
        <CurrencyIcon type="primary" />
      </div>
      <div className="mr-8">
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}

export default ConstructorTotal;
