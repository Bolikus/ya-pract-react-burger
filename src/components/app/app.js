import React from "react";
import logo from "./logo.svg";
import AppHeader from "../header/app-header/app-header";
import BurgerIngrediens from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import mainStyle from "./app.module.css";
import { data } from "../../utils/data.js";

function App() {
  // console.log(data);
  return (
    <div className={mainStyle.App}>
      <AppHeader />
      <main className={mainStyle.main_container}>
        <BurgerIngrediens data={data} />
        <BurgerConstructor data={data} />
      </main>
    </div>
  );
}

export default App;
