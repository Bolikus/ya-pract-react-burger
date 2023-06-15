import React, { useMemo } from "react";

import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";

import { IIngredient, IOrderInfo } from "../../utils/types";

import { CREATED, DONE, PENDING } from "../../pages/feed/feed";

import { useAppSelector } from "../../hook/hooks";

import styles from "./order-info.module.css";

interface IOrderInfoProps {
  order: IOrderInfo;
  path: string;
}

const OrderInfo = (props: IOrderInfoProps) => {
  const { order } = props;
  const location = useLocation();
  const { ingredients } = useAppSelector((state) => state.burgerIngredients);

  const to = location.pathname === "/feed" ? `/feed/${order.number}` : `/profile/orders/${order.number}`;

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
      .map((id: string) => {
        return ingredients.find((ingredient: IIngredient) => ingredient._id === id);
      })
      .filter(isIngredient);
  }, [ingredients, order]);

  const ingredientsUnique = useMemo(() => {
    return Array.from(new Set<IIngredient>(orderIngredients));
  }, [orderIngredients]);

  const ingredientsList = useMemo(() => {
    return ingredientsUnique.slice(0, 5);
  }, [ingredientsUnique]);

  const ingredientsCount = useMemo(() => {
    return ingredientsUnique.length > 6 ? ingredientsUnique.length - 6 : 0;
  }, [ingredientsUnique.length]);

  const summ = useMemo(() => {
    return orderIngredients.reduce((result, item) => result + item.price, 0);
  }, [orderIngredients]);

  return (
    <Link to={to} state={{ backgroundLocation: location }} className={`p-6 ${styles.orderInfo}`}>
      <div className={`${styles.orderInfo__top}`}>
        <div className={`text text_type_digits-default ${styles.orderInfo__top_number}`}>#{order.number}</div>
        <div className={`text text_type_main-default text_color_inactive ${styles.orderInfo__top_date}`}>
          <FormattedDate date={new Date(order.createdAt)} />
        </div>
      </div>
      <div className={"pt-6 text text_type_main-medium"}>{order.name}</div>
      {location.pathname !== "/feed" && (
        <div className={`pt-2 text text_type_main-small ${styles.orderInfo__status_complete}`}>{orderStatus()}</div>
      )}

      <div className={`pt-6 ${styles.orderInfo__bottom}`}>
        <div className={`${styles.orderInfo__bottom_items}`}>
          {ingredientsCount > 0 &&
            ingredientsList.map((ingredient) => {
              return (
                <div className={styles.orderInfo__bottom_item} key={ingredient._id}>
                  <span>
                    <img src={ingredient.image} alt="" />
                  </span>
                </div>
              );
            })}
          {ingredientsCount === 0 &&
            ingredientsList.map((ingredient) => {
              return (
                <div className={styles.orderInfo__bottom_item} key={ingredient._id}>
                  <span>
                    <img src={ingredient.image} alt="" />
                  </span>
                </div>
              );
            })}
          {ingredientsCount > 0 && (
            <div className={styles.orderInfo__bottom_item}>
              <span>
                <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
              </span>
              <span className={`text text_type_digits-default ${styles.orderInfo__more}`}>+{ingredientsCount}</span>
            </div>
          )}
        </div>
        <div className={`${styles.orderInfo__bottom_summ}`}>
          <div className="text text_type_digits-default">{summ}</div>
          <div>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OrderInfo;
