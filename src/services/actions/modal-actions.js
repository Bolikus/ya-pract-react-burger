export const MODAL_OPEN_REQUEST = "MODAL_OPEN_REQUEST";
export const MODAL_OPEN_SUCCESS = "MODAL_OPEN_SUCCESS";
export const MODAL_OPEN_FAILED = "MODAL_OPEN_FAILED";
export const MODAL_CLOSE_REQUEST = "MODAL_CLOSE_REQUEST";
export const MODAL_CLOSE_SUCCESS = "MODAL_CLOSE_SUCCESS";
export const MODAL_CLOSE_FAILED = "MODAL_CLOSE_FAILED";
export const MODAL_OPEN_DETAILS_SUCCESS = "MODAL_OPEN_DETAILS_SUCCESS";
export const MODAL_OPEN_ORDER_SUCCESS = "MODAL_OPEN_ORDER_SUCCESS";

export const openModal = (modalType) => {
  return (
    {
      type: MODAL_OPEN_REQUEST,
    },
    modalType === "details"
      ? {
          type: MODAL_OPEN_DETAILS_SUCCESS,
          payload: true,
        }
      : {
          type: MODAL_OPEN_ORDER_SUCCESS,
          payload: true,
        }
  );
};

export const closeModal = () => {
  return (
    {
      type: MODAL_CLOSE_REQUEST,
    },
    {
      type: MODAL_CLOSE_SUCCESS,
      payload: false,
    }
  );
};
