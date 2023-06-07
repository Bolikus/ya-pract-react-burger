import React, { SyntheticEvent } from "react";
import ModalOverlayStyles from "./modal-overlay.module.css";

interface IModalOverlay {
  onOverlayClickl: () => void;
}

const ModalOverlay = (props: IModalOverlay) => {
  const { onOverlayClickl } = props;

  const handleClickOverlay = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) onOverlayClickl();
  };

  return <div className={ModalOverlayStyles.modalOverlay} onClick={handleClickOverlay}></div>;
};

export default ModalOverlay;
