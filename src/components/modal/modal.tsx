import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import ModalStyles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";

interface IModalProps {
  title?: string;
  children?: ReactNode;
  onCloseAction: () => void;
  navigateTo: string;
}

const modalRoot = document.getElementById("modal") as HTMLDivElement;
const ESC_KEYCODE = 27;

const Modal = (props: IModalProps) => {
  const { title, children, onCloseAction, navigateTo } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateToRoot = () => {
    navigate(navigateTo, { replace: true });
  };

  const handleCloseModal = () => {
    if (onCloseAction) {
      dispatch(onCloseAction());
    }
    navigateToRoot();
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.keyCode === ESC_KEYCODE) {
        if (onCloseAction) {
          dispatch(onCloseAction());
        }
        navigateToRoot();
      }
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [dispatch, navigate]);

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
      <ModalOverlay onCloseAction={onCloseAction} navigateTo={navigateTo} />
    </>,
    modalRoot
  );
};

export default Modal;
