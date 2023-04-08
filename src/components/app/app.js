import React, { useEffect, useState } from "react";
import AppHeader from "../header/app-header/app-header";
import BurgerIngrediens from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import mainStyle from "./app.module.css";
// import { data } from "../../utils/data.js";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const API_URL = "https://norma.nomoreparties.space/api";

  const checkResponse = (response) => {
    return response.ok ? response.json() : response.json().then((err) => Promise.reject(err));
  };

  const getIngredients = () => {
    fetch(`${API_URL}/ingredients`)
      .then(checkResponse)
      .then((data) => {
        if (data?.success) {
          setData(data.data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setHasError(true);
        }
      });
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <div className={mainStyle.App}>
      <AppHeader />
      {isLoading && "loading"}
      {hasError && `Произошла ошибка при загрузке ${hasError}`}
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
