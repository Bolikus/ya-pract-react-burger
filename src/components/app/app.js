import React, { useEffect, useState } from "react";
import AppHeader from "../header/app-header/app-header";
import BurgerIngrediens from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import mainStyle from "./app.module.css";
import { getIngredients } from "../../utils/api";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getIngredients()
      .then(setData)
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  });

  return (
    <div className={mainStyle.App}>
      <AppHeader />
      {isLoading && "loading"}
      {hasError && `Произошла ошибка при загрузке.`}
      {!isLoading && !hasError && (
        <main className={mainStyle.main_container}>
          <BurgerIngrediens data={data} />
          <BurgerConstructor data={data} />
        </main>
      )}
    </div>
  );
}

export default App;
