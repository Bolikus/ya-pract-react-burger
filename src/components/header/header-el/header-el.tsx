import { NavLink } from "react-router-dom";

import heStyles from "./header-el.module.css";

interface IHeaderElementProps {
  linkTo: string;
  icon: JSX.Element;
  text: string;
}

function HeaderElement(props: IHeaderElementProps) {
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

export default HeaderElement;
