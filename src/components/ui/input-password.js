import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

const PasswordInput = (props) => {
  const {
    value,
    onChange,
    size = "default",
    placeholder = "Name",
    icon = "ShowIcon",
    isIcon = false,
    extraClass = "",
    ...rest
  } = props;

  const [visible, setVisible] = useState(false);
  const [fieldDisabled, setDisabled] = useState(icon === "EditIcon");
  const [error, setError] = useState(false);
  const [iconType, setIconType] = useState(true);

  const inputRef = useRef(null);

  const onIconClick = () => {
    setDisabled(false);
    setVisible(true);
    setIconType(false);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const validateField = (value) => {
    setError(value.length < 6);
  };

  const onFocus = () => {
    setError(false);
  };

  const onBlur = (e) => {
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

PasswordInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  isIcon: PropTypes.bool.isRequired,
  extraClass: PropTypes.string,
};

export default PasswordInput;
