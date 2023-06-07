import React from "react";
import styles from "./preloader.module.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";

const Preloader = () => {
  return (
    <div className={`${styles.preloader}`}>
      <div className={`${styles.preloader__block}`}>
        <div className={`${styles.preloader__logo}`}>
          <Logo />
        </div>
        <div className={`${styles.preloader__text}`}>Загружаем...</div>
      </div>
    </div>
  );
};

export default Preloader;
