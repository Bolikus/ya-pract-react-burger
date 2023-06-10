import React, { useEffect } from "react";
import OrderInfo from "../order-info/order-info";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import { WS_CONNECTION_ORDERS_END, WS_CONNECTION_ORDERS_START } from "../../services/actions/socket-actions";
import { wsUrl } from "../../utils/api";
import Preloader from "../preloader/preloader";
import styles from "./profile-orders.module.css";

const ProfileOrders = () => {
  const dispatch = useAppDispatch();

  const { orders } = useAppSelector((state) => state.socketOrders);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const accessToken = token?.split("Bearer ")[1];
    dispatch({
      type: WS_CONNECTION_ORDERS_START,
      payload: `${wsUrl}?token=${accessToken}`,
    });
    return () => {
      dispatch({
        type: WS_CONNECTION_ORDERS_END,
        payload: "disconnect",
      });
    };
  }, [dispatch]);

  return (
    <div className={`custom-scroll ${styles.profileOrders}`}>
      {orders.length > 0 ? (
        orders.map((order) => {
          return <OrderInfo order={order} key={order._id} path={"/profile/orders"} />;
        })
      ) : (
        <Preloader message="Загружаем..." />
      )}
    </div>
  );
};

export default ProfileOrders;
