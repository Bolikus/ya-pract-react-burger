import React, { useRef, useState, HTMLProps } from "react";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

interface TPasswordInputInterface extends Omit<HTMLProps<HTMLInputElement>, "size" | "type" | "ref"> {
  value: string;
  placeholder?: string;
  size?: "default" | "small";
  icon?: "HideIcon" | "ShowIcon" | "EditIcon";
  extraClass?: string;
  isIcon?: boolean;

  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const PasswordInput: React.FC<TPasswordInputInterface> = ({
  value,
  placeholder = "Пароль",
  onChange,
  size,
  icon = "ShowIcon",
  isIcon = false,
  extraClass = "",
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  const [fieldDisabled, setDisabled] = useState(icon === "EditIcon");
  const [error, setError] = useState(false);
  const [iconType, setIconType] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);

  const onIconClick = () => {
    setDisabled(false);
    setVisible(true);
    setIconType(false);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const validateField = (value: string) => {
    setError(value.length < 6);
  };

  const onFocus = () => {
    setError(false);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value) {
      validateField(e.target.value);
    } else {
      setError(false);
    }

    if (!iconType) {
      setDisabled(true);
      setIconType(true);
    } else {
      setIconType(true);
    }
    setVisible(false);
  };

  return (
    <Input
      type={visible ? "text" : "password"}
      placeholder={placeholder}
      onChange={onChange}
      icon={isIcon && iconType ? "EditIcon" : "CloseIcon"}
      value={value}
      ref={inputRef}
      onBlur={onBlur}
      onFocus={onFocus}
      error={error}
      onIconClick={onIconClick}
      errorText={"Некорректный пароль"}
      size={size === "small" ? "small" : "default"}
      disabled={fieldDisabled}
      extraClass={extraClass}
      {...rest}
    />
  );
};

export default PasswordInput;
