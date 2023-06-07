import React, { useRef, useState } from "react";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

interface TEmailInputInterface extends Omit<React.HTMLProps<HTMLInputElement>, "size" | "type" | "ref"> {
  value: string;
  size?: "default" | "small";
  placeholder?: string;
  isIcon?: boolean;
  extraClass?: string;

  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const NameInput: React.FC<TEmailInputInterface> = ({
  value,
  onChange,
  size = "default",
  placeholder = "E-mail",
  isIcon = false,
  extraClass = "",
  ...rest
}) => {
  const [fieldDisabled, setDisabled] = useState(isIcon);

  const [iconType, setIconType] = useState(true);

  const [error, setError] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const onIconClick = () => {
    setDisabled(false);
    setIconType(false);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const onFocus = () => {
    setError(false);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    isIcon && setDisabled(true);
    isIcon && setIconType(true);
  };

  return (
    <Input
      type="email"
      placeholder={placeholder}
      onChange={onChange}
      icon={isIcon && iconType ? "EditIcon" : "CloseIcon"}
      value={value}
      ref={inputRef}
      onBlur={onBlur}
      onFocus={onFocus}
      error={error}
      disabled={fieldDisabled}
      onIconClick={onIconClick}
      errorText={"Ой, произошла ошибка!"}
      size={size}
      extraClass={extraClass}
      {...rest}
    />
  );
};

export default NameInput;
