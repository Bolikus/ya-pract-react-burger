import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import heStyles from "./header-el.module.css";

function HeaderElement(props) {
  return (
    <NavLink
      to={props.linkTo}
      className={({ isActive }) => (isActive ? heStyles.aButtonEnable : heStyles.aButtonDisable)}
    >
      {props.icon}
      <span className="text text_type_main-default">{props.text}</span>
    </NavLink>
  );
}

HeaderElement.propTypes = {
  linkTo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default HeaderElement;
