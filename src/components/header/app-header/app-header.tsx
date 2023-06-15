import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderElement from "../header-el/header-el";
import headerStyles from "./app-header.module.css";
import { NavLink } from "react-router-dom";

function AppHeader() {
  return (
    <header className={headerStyles.container_grid}>
      <div className={headerStyles.left_col}>
        <HeaderElement linkTo={"/"} icon={<BurgerIcon type="primary" />} text={"Конструктор"} />
        <HeaderElement linkTo={"/feed"} icon={<ListIcon type="primary" />} text={"Лента заказов"} />
      </div>
      <div className={headerStyles.centr_col}>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
      <div className={headerStyles.right_col}>
        <HeaderElement linkTo={"/profile"} icon={<ProfileIcon type="primary" />} text={"Личный кабинет"} />
      </div>
    </header>
  );
}

export default AppHeader;
