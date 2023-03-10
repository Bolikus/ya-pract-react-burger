import {
  BurgerIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import heStyles from "./header-el.module.css";

function HeaderElement(props) {
  return (
    <a href="/" className={heStyles.element}>
      {/* <BurgerIcon type="primary" /> */}
      {props.icon}
      <p className={heStyles.light}>{props.text}</p>
    </a>
  );
}

export default HeaderElement;
