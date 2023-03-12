import React from "react";
import logo from "./logo.svg";
import AppHeader from "./components/header/app-header/app-header";
import BurgerIngrediens from "./components/b-ingredients/burger-ingredients";
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
      {/* <div className={mainStyle.container_grid}> */}
      <div className={mainStyle.main_container}>
        {/* <div className={mainStyle.left_col}> */}
        <BurgerIngrediens data={data} />
        {/* </div> */}
        {/* <div className={mainStyle.right_col}> */}
        <BurgerConstructor />
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
