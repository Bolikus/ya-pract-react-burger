import React, { useEffect, useMemo, useState } from "react";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import { CREATED, DONE, PENDING } from "../../pages/feed/feed";
import { IIngredient } from "../../utils/types";
import { getOrder } from "../../services/actions/order-details-actions";
import styles from "./order-page.module.css";

interface IOrderState {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
}

const OrderPage = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const [order, setOrder] = useState<IOrderState>({
    createdAt: "",
    ingredients: [],
    name: "",
    number: 0,
    status: "",
    updatedAt: "",
    _id: "",
  });
  const { ingredients } = useAppSelector((state) => state.burgerIngredients);

  const currentOrder = useAppSelector((state) => state.orderDetails.orderDetails);

  useEffect(() => {
    if (currentOrder) {
      setOrder({
        createdAt: currentOrder.createdAt,
        ingredients: currentOrder.ingredients,
        name: currentOrder.name,
        number: currentOrder.number,
        status: currentOrder.status,
        updatedAt: currentOrder.updatedAt,
        _id: currentOrder._id,
      });
    }
  }, [currentOrder]);

  const orderStatus = () => {
    if (order.status === CREATED) {
      return "Создан";
    } else if (order.status === PENDING) {
      return "Готовится";
    } else if (order.status === DONE) {
      return "Выполнен";
    }
  };

  const orderIngredients: IIngredient[] = useMemo(() => {
    const isIngredient = (ingredient: IIngredient | undefined): ingredient is IIngredient => ingredient !== undefined;
    return order.ingredients
      .map((id) => {
        return ingredients.find((ingredient: IIngredient) => ingredient._id === id);
      })
      .filter(isIngredient);
  }, [ingredients, order]);

  const ingredientsUnique = useMemo(() => {
    return Array.from(new Set<IIngredient>(orderIngredients));
  }, [orderIngredients]);

  const countIngredients = useMemo(() => {
    const counts = order?.ingredients.reduce((acc: { [a: string]: number }, i) => {
      if (acc.hasOwnProperty(i)) {
        acc[i] += 1;
      } else {
        acc[i] = 1;
      }
      return acc;
    }, {});
    return counts;
  }, [order?.ingredients]);

  const orderSumm = useMemo(() => {
    let totalSumm = 0;
    order?.ingredients.forEach((id) => {
      const ingredient = ingredientsUnique.find((item) => item._id === id);
      if (ingredient) {
        totalSumm += ingredient.price;
      }
    });
    return totalSumm;
  }, [ingredientsUnique, order]);

  useEffect(() => {
    if (id) {
      dispatch(getOrder(id));
    }
  }, [id, dispatch]);

  return (
    <div className={styles.orderPage}>
      <div className={styles.orderPage__container}>
        <div className={`text text_type_digits-default ${styles.orderPage__number}`}>#{currentOrder?.number}</div>
        <div className={`text text_type_main-medium mt-10 ${styles.orderPage__title}`}>{currentOrder?.name}</div>
        <div className={`text text_type_main-default mt-3 ${styles.orderPage__status_active}`}>{orderStatus()}</div>
        <div className={`text text_type_main-medium mt-15 ${styles.orderPage__compound}`}>Состав:</div>
        <div className={`mt-6 custom-scroll ${styles.orderPage__list}`}>
          {ingredientsUnique.map((orderIngredient: IIngredient, index: number) => {
            return (
              <div className={`${styles.orderPage__item}`} key={index}>
                <div className={`${styles.orderPage__item_image}`}>
                  <span>
                    <img src={orderIngredient?.image} alt="" />
                  </span>
                </div>
                <div className={`${styles.orderPage__item_title}`}>{orderIngredient?.name}</div>
                <div className={`${styles.orderPage__item_count}`}>
                  <span className="text text_type_digits-default">
                    {countIngredients ? `${countIngredients[orderIngredient._id]}` : ""}x {orderIngredient?.price}
                  </span>
                  <span>
                    <CurrencyIcon type="primary" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={`mt-10 ${styles.orderPage__summ}`}>
          <div className={`text text_type_main-default text_color_inactive ${styles.orderPage__summ_datetime}`}>
            <FormattedDate date={new Date(order.createdAt)} />
          </div>
          <div className={`${styles.orderPage__summ_count}`}>
            <span className="text text_type_digits-default">{orderSumm}</span>
            <span>
              <CurrencyIcon type="primary" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
