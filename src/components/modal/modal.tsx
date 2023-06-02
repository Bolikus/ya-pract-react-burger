import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import ModalStyles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useEffect, ReactNode } from "react";
import { burgerConstructorClear } from "../../services/actions/order-details-actions";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";

interface IModalProps {
  title?: string;
  children?: ReactNode;
}

const modalRoot = document.getElementById("modal") as HTMLDivElement;
const ESC_KEYCODE = 27;

const Modal = (props: IModalProps) => {
  const { title, children } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const orderDetails = useAppSelector((state) => state.orderDetails);

  const handleCloseModal = () => {
    if (orderDetails.order !== null) {
      dispatch(burgerConstructorClear());
    }
    navigate("/", { replace: true });
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.keyCode === ESC_KEYCODE) {
        if (orderDetails.order !== null) {
          dispatch(burgerConstructorClear());
        }
        navigate("/", { replace: true });
      }
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [dispatch, orderDetails.order, navigate]);

  return ReactDOM.createPortal(
    <>
      <div className={ModalStyles.modal}>
        <div className={ModalStyles.modal_container}>
          <div className={ModalStyles.modal_block}>
            <div>
              <button className={ModalStyles.modal_close} onClick={handleCloseModal}>
                <CloseIcon type="primary" />
              </button>
              {title && <div className={`mt-3 ml-15 text text_type_main-large`}>{title}</div>}
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
      <ModalOverlay />
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};

export default Modal;
