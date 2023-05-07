import { useEffect } from "react";
import AppHeader from "../header/app-header/app-header";
import BurgerIngrediens from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useDispatch, useSelector } from "react-redux";
import mainStyle from "./app.module.css";
import { getBurgerIngredients } from "../../services/actions/burger-ingredients-actions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch();
  const { ingredients, hasError, isLoading } = useSelector((state) => state.burgerIngredients);

  useEffect(() => {
    dispatch(getBurgerIngredients());
  }, [dispatch]);

  return (
    <div className={mainStyle.App}>
      <AppHeader />
      {isLoading && "loading"}
      {hasError && `Произошла ошибка при загрузке.`}
      {!isLoading && !hasError && (
        <main className={mainStyle.main_container}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngrediens ingredients={ingredients} isLoading={isLoading} hasError={hasError} />
            <BurgerConstructor />
          </DndProvider>
        </main>
      )}
    </div>
  );
}

export default App;
