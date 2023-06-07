import React, { FormEvent, useCallback, useState } from "react";
import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./forgot-password.module.css";
import { passwordReset } from "../../utils/api";
import useForm from "../../hook/useForm";

const ForgotPassword = () => {
  const { values, handleChange } = useForm({ email: "" });
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (values.email !== "" && values.email.length > 0) {
        passwordReset(values)
          .then((response) => {
            if (response && response.success) {
              navigate("/reset-password", {
                state: { from: location.pathname },
              });
            } else {
              setError("Произошла ошибка, проверьте правильность заполения email");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    [values, location.pathname, navigate]
  );

  return (
    <div className={styles.forgotPassword}>
      <div className="text text_type_main-medium">Восстановление пароля</div>
      <form onSubmit={onSubmit}>
        <EmailInput
          placeholder={"Укажите e-mail"}
          onChange={handleChange}
          value={values.email}
          name={"email"}
          isIcon={false}
          extraClass="mt-6"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mt-6"
          disabled={values.email !== "" && values.email.length > 0 ? false : true}
        >
          Восстановить
        </Button>
      </form>
      {error !== null && <div className="mt-5">{error}</div>}
      <div className="mt-20 text text_type_main-default text_color_inactive">
        Вспомнили пароль? <Link to="/login">Войти</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
