import React, { SyntheticEvent } from "react";
import ModalOverlayStyles from "./modal-overlay.module.css";

interface IModalOverlay {
  onOverlayClick: () => void;
}

const ModalOverlay = (props: IModalOverlay) => {
  const { onOverlayClick } = props;

  const handleClickOverlay = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) onOverlayClick();
  };

  return <div className={ModalOverlayStyles.modalOverlay} onClick={handleClickOverlay}></div>;
};

export default ModalOverlay;
