// import React from "react";
// import { useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

function Tabs() {
  //   const [current, willBesetCurrent] = React.useState("one");
  const current = "one";
  const willBesetCurrent = () => {
    console.log("I am willBesetCurrent function");
  };
  return (
    <div style={{ display: "flex" }}>
      <Tab value="one" active={current === "one"} onClick={willBesetCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === "two"} onClick={willBesetCurrent}>
        Соусы
      </Tab>
      <Tab
        value="three"
        active={current === "three"}
        onClick={willBesetCurrent}
      >
        Начинки
      </Tab>
    </div>
  );
}

export default Tabs;
