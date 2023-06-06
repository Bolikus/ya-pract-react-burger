import { useEffect } from "react";
import Preloader from "../preloader/preloader";
import AppHeader from "../header/app-header/app-header";
import { getBurgerIngredients } from "../../services/actions/burger-ingredients-actions";
import Main from "../../pages/main/main";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import Profile from "../../pages/profile/profile";
import Ingredients from "../../pages/ingredients/ingredients";
import Page404 from "../../pages/page404/page404";
import Feed from "../../pages/feed/feed";
import ProfileForm from "../profile-form/profile-form";
import ProfileHistory from "../profile-history/profile-history";
import IngredientDetails from "../burger-ingredients/ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import { checkUserAuth } from "../../services/actions/auth-actions";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import { removeBurgerIngredientDetails } from "../../services/actions/burger-ingredient-details-actions";

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const { ingredients, hasError, isLoading } = useAppSelector((state) => state.burgerIngredients);
  const location = useLocation();
  const state = location.state?.backgroundLocation;

  useEffect(() => {
    dispatch(getBurgerIngredients());
    dispatch(checkUserAuth());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Preloader />}
      {!isLoading && (
        <>
          <AppHeader />

          <Routes location={state || location}>
            <Route path="/" element={<Main ingredients={ingredients} isLoading={isLoading} hasError={hasError} />} />
            <Route path="/login" element={<OnlyUnAuth component={<Login />} />} />
            <Route path="/register" element={<OnlyUnAuth component={<Register />} />} />
            <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPassword />} />} />

            <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPassword />} />} />

            <Route path="/profile" element={<OnlyAuth component={<Profile />} />}>
              <Route index element={<ProfileForm />} />
              <Route path="/profile/orders/:id" element={<ProfileHistory />} />
            </Route>
            <Route path="feed" element={<Feed />} />
            <Route path="/ingredients/:id" element={<Ingredients ingredients={ingredients} isLoading={isLoading} />} />
            <Route path="*" element={<Page404 />} />
          </Routes>

          {state && (
            <Routes>
              <Route
                path="/ingredients/:id"
                element={
                  <Modal title="Детали ингредиента" onCloseAction={removeBurgerIngredientDetails} navigateTo={"/"}>
                    <IngredientDetails ingredients={ingredients} isLoading={isLoading} />
                  </Modal>
                }
              />
            </Routes>
          )}
        </>
      )}
    </>
  );
}

export default App;
