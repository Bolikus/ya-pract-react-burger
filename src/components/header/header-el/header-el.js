import PropTypes from "prop-types";

import heStyles from "./header-el.module.css";

function HeaderElement(props) {
  return (
    <a href="/" className={heStyles.element}>
      {props.icon}
      <p className="text_color_inactive">{props.text}</p>
    </a>
  );
}

HeaderElement.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.object,
};

export default HeaderElement;
