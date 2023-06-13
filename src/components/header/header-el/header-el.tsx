import { NavLink } from "react-router-dom";

import heStyles from "./header-el.module.css";

interface IHeaderElementProps {
  linkTo: string;
  icon: JSX.Element;
  text: string;
}

function HeaderElement(props: IHeaderElementProps) {
  const { linkTo, icon, text } = props;
  return (
    <NavLink to={linkTo} className={({ isActive }) => (isActive ? heStyles.aButtonEnable : heStyles.aButtonDisable)}>
      {icon}
      <span className="text text_type_main-default">{text}</span>
    </NavLink>
  );
}

export default HeaderElement;
