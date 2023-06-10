import React from "react";
import styles from "./preloader.module.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";

interface IPreloaderProps {
  message: string;
}

const Preloader = (props: IPreloaderProps) => {
  const { message } = props;
  return (
    <div className={`${styles.preloader}`}>
      <div className={`${styles.preloader__block}`}>
        <div className={`${styles.preloader__logo}`}>
          <Logo />
        </div>
        <div className={`${styles.preloader__text}`}>{message}</div>
      </div>
    </div>
  );
};

export default Preloader;
