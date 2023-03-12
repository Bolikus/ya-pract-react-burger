import {
  BurgerIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import heStyles from "./header-el.module.css";

function HeaderElement(props) {
  return (
    <a href="/" className={heStyles.element}>
      {props.icon}
      {/* <p className={heStyles.light}>{props.text}</p> */}
      {/* <p className={`text_color_inactive ${heStyles.light}`}>{props.text}</p> */}
      <p className="text_color_inactive">{props.text}</p>
    </a>
  );
}

export default HeaderElement;
