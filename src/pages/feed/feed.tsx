import React, { useEffect, useMemo } from "react";

import { v4 as uuidv4 } from "uuid";

import OrderInfo from "../../components/order-info/order-info";

import { useAppDispatch, useAppSelector } from "../../hook/hooks";

import { WS_CONNECTION_END, WS_CONNECTION_START } from "../../services/actions/socket-actions";

import { wsUrl } from "../../utils/api";

import Preloader from "../../components/preloader/preloader";

import styles from "./feed.module.css";

export const DONE = "done";
export const PENDING = "pending";
export const CREATED = "created";

export interface IOrdersItem {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
}

const Feed = () => {
  const dispatch = useAppDispatch();
  const { orders, total, totalToday } = useAppSelector((state) => state.socket);

  const ordersDone10 = useMemo(() => {
    return orders
      .filter((item: IOrdersItem) => item.status === DONE)
      .slice(0, 10)
      .map((item) => item.number);
  }, [orders]);
  const ordersDone20 = useMemo(() => {
    return orders
      .filter((item: IOrdersItem) => item.status === DONE)
      .slice(10, 20)
      .map((item) => item.number);
  }, [orders]);

  const ordersWork10 = useMemo(() => {
    return orders
      .filter((item: IOrdersItem) => item.status === PENDING || item.status === CREATED)
      .slice(0, 10)
      .map((item) => item.number);
  }, [orders]);
  const ordersWork20 = useMemo(() => {
    return orders
      .filter((item: IOrdersItem) => item.status === PENDING)
      .slice(10, 20)
      .map((item) => item.number);
  }, [orders]);

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
      payload: `${wsUrl}/all`,
    });
    return () => {
      dispatch({ type: WS_CONNECTION_END, payload: "disconnect" });
    };
  }, [dispatch]);

  return (
    <div className={styles.feed}>
      <div className={`text text_type_main-large ${styles.feed__title}`}>Лента заказов</div>
      <div className={styles.feed__block}>
        <div className={`custom-scroll ${styles.feed__list}`}>
          {orders.length > 0 ? (
            orders.map((order) => {
              return <OrderInfo order={order} key={order._id} path={"/feed"} />;
            })
          ) : (
            <Preloader message="Загружаем..." />
          )}
        </div>
        <div className={styles.feed__summary}>
          <div className={styles.feed__summary_status}>
            <div className={styles.feed__summary_ready}>
              <div className="text text_type_main-medium mb-6">Готовы:</div>
              <div className={styles.feed__summary_ready_wrapper}>
                <div className={styles.feed__summary_ready_col}>
                  {ordersDone10.map((item) => {
                    return (
                      <div
                        className={`text text_type_digits-default mb-2 ${styles.feed__summary_ready_success}`}
                        key={item}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
                <div className={styles.feed__summary_ready_col}>
                  {ordersDone20.map((item) => {
                    return (
                      <div
                        className={`text text_type_digits-default mb-2 ${styles.feed__summary_ready_success}`}
                        key={item}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={styles.feed__summary_inwork}>
              <div className="text text_type_main-medium mb-6">В работе:</div>
              <div className={styles.feed__summary_inwork_wrapper}>
                <div className={styles.feed__summary_inwork_col}>
                  {ordersWork10.map((item) => {
                    return (
                      <div className="text text_type_digits-default mb-2" key={item}>
                        {item}
                      </div>
                    );
                  })}
                </div>
                <div className={styles.feed__summary_inwork_col}>
                  {ordersWork20.map((item) => {
                    return (
                      <div className="text text_type_digits-default mb-2" key={item}>
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className={`mt-15 ${styles.feed__summary_completedallthetime}`}>
            <div className="text text_type_main-medium">Выполнено за все время:</div>
            <div className="text text_type_digits-large">{new Intl.NumberFormat("ru-RU").format(total)}</div>
          </div>
          <div className={`mt-15 ${styles.feed__summary_completedtoday}`}>
            <div className="text text_type_main-medium">Выполнено за сегодня:</div>
            <div className="text text_type_digits-large">{new Intl.NumberFormat("ru-RU").format(totalToday)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
