import { Middleware } from "redux";

import { ISocketFeedActions, ISocketFeedOrdersActions } from "../actions/socket-actions";
import { RootState } from "../../index";
import { IOrderInfo } from "../../utils/types";

const socketMiddleware = (wsActions: ISocketFeedActions | ISocketFeedOrdersActions): Middleware<RootState> => {
  return (store) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type } = action;
      const { wsConnectionClosed, wsConnectionError, wsConnectionStart, wsConnectionSuccess, wsGetMessage } = wsActions;

      if (type === wsConnectionStart) {
        socket = new WebSocket(action.payload);
      }

      if (socket && type === wsConnectionStart) {
        socket.onopen = (event) => {
          dispatch({
            type: wsConnectionSuccess,
            payload: event,
          });
        };
        socket.onerror = (event) => {
          dispatch({
            type: wsConnectionError,
            payload: event,
          });
        };
        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          if (restParsedData.orders) {
            restParsedData.orders.sort((a: IOrderInfo, b: IOrderInfo) => b.number - a.number);
          }
          dispatch({
            type: wsGetMessage,
            payload: restParsedData,
          });
        };
        socket.onclose = (event) => {
          dispatch({
            type: wsConnectionClosed,
            payload: event,
          });
        };
      }

      next(action);
    };
  };
};

export default socketMiddleware;
