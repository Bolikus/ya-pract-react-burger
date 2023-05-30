import React, { useCallback, useState } from "react";
import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendRegisterForm } from "../../services/actions/auth-actions";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (
        name !== "" &&
        name.length > 0 &&
        email !== "" &&
        email.length > 0 &&
        password !== "" &&
        password.length > 0
      ) {
        dispatch(sendRegisterForm(name, email, password));
        navigate("/", { replace: true });
      }
    },
    [dispatch, navigate, email, name, password]
  );

  return (
    <div className={styles.register}>
      <div className="text text_type_main-medium">Регистрация</div>
      <form onSubmit={onSubmit}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={onChangeName}
          value={name}
          name={"name"}
          error={false}
          extraClass="mt-6"
        />
        <EmailInput onChange={onChangeEmail} value={email} name={"email"} isIcon={false} extraClass="mt-6" />
        <PasswordInput onChange={onChangePassword} value={password} name={"password"} extraClass="mt-6" />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mt-6"
          disabled={
            name !== "" && name.length > 0 && email !== "" && email.length > 0 && password !== "" && password.length > 0
              ? false
              : true
          }
        >
          Зарегистрироваться
        </Button>
      </form>

      <div className="mt-20 text text_type_main-default text_color_inactive">
        Уже зарегистрированы? <Link to="/login">Войти</Link>
      </div>
    </div>
  );
};

export default Register;
