import React, { SyntheticEvent } from "react";
import ModalOverlayStyles from "./modal-overlay.module.css";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";

interface IModalOverlay {
  navigateToRoot: () => void;
  onOverlayClicklAction: () => void;
}

const ModalOverlay = (props: IModalOverlay) => {
  const { navigateToRoot, onOverlayClicklAction } = props;

  const dispatch = useAppDispatch();

  const handleClickOverlay = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      dispatch(onOverlayClicklAction());
      navigateToRoot();
    }
  };

  return <div className={ModalOverlayStyles.modalOverlay} onClick={handleClickOverlay}></div>;
};

export default ModalOverlay;
