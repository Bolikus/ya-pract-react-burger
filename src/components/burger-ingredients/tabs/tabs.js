// import React from "react";
import { useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import tabsStyles from "./tabs.module.css";

function Tabs() {
  const [currentTab, setCurrentTab] = useState("buns");

  const onTabClick = (tab) => {
    setCurrentTab(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={tabsStyles.tabs}>
      <Tab value="buns" active={currentTab === "buns"} onClick={onTabClick}>
        Булки
      </Tab>
      <Tab value="sauce" active={currentTab === "sauce"} onClick={onTabClick}>
        Соусы
      </Tab>
      <Tab value="main" active={currentTab === "main"} onClick={onTabClick}>
        Начинки
      </Tab>
    </div>
  );
}

export default Tabs;
