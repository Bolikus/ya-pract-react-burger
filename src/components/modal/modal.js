import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import ModalStyles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { burgerConstructorClear } from "../../services/actions/order-details-actions";
import { useNavigate } from "react-router-dom";

const modalRoot = document.getElementById("modal");

const Modal = (props) => {
  const { title, children } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderDetails = useSelector((state) => state.orderDetails);

  const handleCloseModal = () => {
    if (orderDetails.order !== null) {
      dispatch(burgerConstructorClear());
    }
    navigate("/", { replace: true });
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) {
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
