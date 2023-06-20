import Styles from "./order-details.module.css";
import done from "../../../images/done.png";

interface IConstructorDetailsProps {
  orderId: number;
  orderName: string;
}

const OrderDetails = (props: IConstructorDetailsProps) => {
  const { orderId, orderName } = props;
  return (
    <div className={`mt-20 mb-20 ${Styles.orderDetails}`} data-test="order-details">
      <div className={`text text_type_digits-large ${Styles.orderDetails_id}`}>{orderId}</div>
      <div className={`mt-8 text text_type_main-medium ${Styles.orderDetails_title}`}>идентификатор заказа</div>
      <div className={`mt-15 ${Styles.orderDetails_image}`}>
        <img src={done} alt="Done" />
      </div>
      <div className={`mt-15 text text_type_main-default ${Styles.orderDetails_text}`}>Ваш заказ начали готовить</div>
      <div className={`mt-2 text text_type_main-default text_color_inactive ${Styles.orderDetails_description}`}>
        Дождитесь готовности "{orderName}" на орбитальной станции
      </div>
    </div>
  );
};

export default OrderDetails;
