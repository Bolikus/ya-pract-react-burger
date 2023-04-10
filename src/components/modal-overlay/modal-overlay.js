import ModalOverlayStyles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

const ModalOverlay = (props) => {
  const { closeModal } = props;

  const handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return <div className={ModalOverlayStyles.modalOverlay} onClick={handleClickOverlay}></div>;
};

ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ModalOverlay;
