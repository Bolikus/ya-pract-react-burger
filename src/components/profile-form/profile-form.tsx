import React, { SyntheticEvent } from "react";
import NameInput from "../ui/input-name";
import EmailInput from "../ui/input-email";
import PasswordInput from "../ui/input-password";
import styles from "../../pages/profile/profile.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { changeUser } from "../../services/actions/auth-actions";
import useForm from "../../hook/useForm";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";

const ProfileForm = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const { values, setValues, handleChange } = useForm({
    name: user.name,
    email: user.email,
    password: "",
  });

  const defaultValues = {
    name: user.name,
    email: user.email,
    password: "",
  };

  const handleReset = (e: SyntheticEvent) => {
    e.preventDefault();
    setValues(defaultValues);
  };

  const handleSubmitForm = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(changeUser(values));
  };

  return (
    <div className={styles.profile__form}>
      <form onSubmit={handleSubmitForm}>
        <NameInput onChange={handleChange} value={values.name} name={"name"} placeholder="Имя" isIcon />
        <EmailInput
          onChange={handleChange}
          value={values.email}
          name={"email"}
          placeholder="Логин"
          isIcon
          extraClass="mt-6"
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password}
          name={"password"}
          isIcon
          placeholder="Пароль"
          extraClass="mt-6"
        />
        {(values.name !== user.name ||
          values.email !== user.email ||
          (values.password !== "*****" && values.password.length > 0)) && (
          <div className={`mt-6 ${styles.profile__buttons}`}>
            <Button htmlType="button" type="secondary" size="medium" onClick={handleReset}>
              Отмена
            </Button>
            <Button htmlType="submit" type="primary" size="medium">
              Сохранить
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfileForm;
