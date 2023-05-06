import React, { useEffect, useState } from "react";
import AppHeader from "../header/app-header/app-header";
import BurgerIngrediens from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useDispatch, useSelector } from "react-redux";

import mainStyle from "./app.module.css";
// import { getIngredients } from "../../utils/api";
import { getBurgerIngredients } from "../../services/actions/burger-ingredients-actions";

function App() {
  const dispatch = useDispatch();
  const { ingredients, hasError, isLoading } = useSelector((state) => state.burgerIngredients);

  const printState = useSelector((state) => state);
  // console.log(printState);
  // const [ingredients, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [hasError, setHasError] = useState(false);

  // useEffect(() => {
  //   getIngredients()
  //     .then(setData)
  //     .catch(() => setHasError(true))
  //     .finally(() => setIsLoading(false));
  // }, []);

  useEffect(() => {
    dispatch(getBurgerIngredients());
  }, [dispatch]);

  console.log(printState);

  return (
    <div className={mainStyle.App}>
      <AppHeader />
      {isLoading && "loading"}
      {hasError && `Произошла ошибка при загрузке.`}
      {!isLoading && !hasError && (
        <main className={mainStyle.main_container}>
          <BurgerIngrediens ingredients={ingredients} />
          <BurgerConstructor />
        </main>
      )}
    </div>
  );
}

export default App;
