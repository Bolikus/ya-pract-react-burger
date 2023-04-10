import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import ModalStyles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useEffect } from "react";

const modalRoot = document.getElementById("modal");

const Modal = (props) => {
  const { title, closeModal, children } = props;

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeModal]);

  return ReactDOM.createPortal(
    <>
      <div className={ModalStyles.modal}>
        <div className={ModalStyles.modal_container}>
          <div className={ModalStyles.modal_block}>
            <div>
              <button className={ModalStyles.modal_close} onClick={closeModal}>
                <CloseIcon type="primary" />
              </button>
              {title && <div className={`mt-3 text text_type_main-large`}>{title}</div>}
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
      <ModalOverlay closeModal={closeModal} />
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default Modal;
