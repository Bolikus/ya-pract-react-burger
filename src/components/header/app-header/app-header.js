import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderElement from "../header-el/header-el";
import headerStyles from "./app-header.module.css";

function AppHeader() {
  return (
    <header className={headerStyles.container_grid}>
      <div className={headerStyles.left_col}>
        <HeaderElement linkTo={"/"} icon={<BurgerIcon />} text={"Конструктор"} />
        <HeaderElement linkTo={"/feed"} icon={<ListIcon />} text={"Лента заказов"} />
      </div>
      <div className={headerStyles.centr_col}>
        <Logo />
      </div>
      <div className={headerStyles.right_col}>
        <HeaderElement linkTo={"/profile"} icon={<ProfileIcon />} text={"Личный кабинет"} />
      </div>
    </header>
  );
}

export default AppHeader;
