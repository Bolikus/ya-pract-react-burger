import React, { useRef, useState } from "react";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const EmailInput = (props) => {
  const { value, onChange, size = "default", placeholder = "E-mail", isIcon = false, extraClass = "", ...rest } = props;

  const [fieldDisabled, setDisabled] = useState(isIcon);
  const [error, setError] = useState(false);
  const [iconType, setIconType] = useState(true);
  const inputRef = useRef(null);

  const onIconClick = () => {
    setDisabled(false);
    setIconType(false);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const validateField = (value) => {
    setError(!validateEmail(value));
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

EmailInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  isIcon: PropTypes.bool.isRequired,
  extraClass: PropTypes.string,
};

export default EmailInput;
