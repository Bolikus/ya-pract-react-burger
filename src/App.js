import React from "react";
import logo from "./logo.svg";
import AppHeader from "./components/header/app-header/app-header";
import BurgerIngrediens from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";

import mainStyle from "./App.module.css";
import { data } from "./utils/data.js";

function App() {
  // console.log(data);
  return (
    <div className={mainStyle.App}>
      <div>
        <AppHeader />
      </div>
      <div className={mainStyle.main_container}>
        <BurgerIngrediens data={data} />
        <BurgerConstructor data={data} />
      </div>
    </div>
  );
}

export default App;
