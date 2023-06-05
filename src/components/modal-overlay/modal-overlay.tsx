import React, { SyntheticEvent } from "react";
import ModalOverlayStyles from "./modal-overlay.module.css";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import { useNavigate } from "react-router-dom";

interface IModalOverlay {
  onCloseAction: () => void;
  navigateTo: string;
}

const ModalOverlay = (props: IModalOverlay) => {
  const { onCloseAction, navigateTo } = props;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClickOverlay = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      dispatch(onCloseAction());
      navigate(navigateTo, { replace: true });
    }
  };

  return <div className={ModalOverlayStyles.modalOverlay} onClick={handleClickOverlay}></div>;
};

export default ModalOverlay;
