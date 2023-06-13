import React, { useCallback, useEffect, useState, SyntheticEvent } from "react";
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./reset-password.module.css";
import { passwordChange } from "../../utils/api";
import useForm from "../../hook/useForm";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { values, handleChange } = useForm({ password: "", token: "" });
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (location.state === null || location.state.from !== "/forgot-password") {
      navigate("/", { replace: true });
    }
  }, [navigate, location.state]);

  const onSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      if (values.password !== "" && values.password.length > 0 && values.token !== "" && values.token.length > 0) {
        passwordChange(values).then((response) => {
          if (response && response.success) {
            setMessage("Пароль успешно изменен!");
            navigate("/login", { replace: true });
          } else {
            setMessage("Произошла какая-то неведомая ошибка)");
          }
        });
      }
    },
    [navigate, values]
  );

  return (
    <div className={styles.resetPassword}>
      <div className="text text_type_main-medium">Восстановление пароля</div>
      <form onSubmit={onSubmit}>
        <PasswordInput
          onChange={handleChange}
          value={values.password}
          name={"password"}
          extraClass="mt-6"
          placeholder={"Введите новый пароль"}
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={handleChange}
          value={values.token}
          name={"token"}
          error={false}
          extraClass="mt-6"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mt-6"
          disabled={
            values.password !== "" && values.password.length > 0 && values.token !== "" && values.token.length > 0
              ? false
              : true
          }
        >
          Сохранить
        </Button>
      </form>
      {message !== null && <div className="mt-5">{message}</div>}
      <div className="mt-20 text text_type_main-default text_color_inactive">
        Вспомнили пароль? <Link to="/login">Войти</Link>
      </div>
    </div>
  );
};

export default ResetPassword;
