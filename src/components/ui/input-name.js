import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

const NameInput = (props) => {
  const { value, onChange, size = "default", placeholder = "Name", isIcon = false, extraClass = "", ...rest } = props;

  const [fieldDisabled, setDisabled] = useState(isIcon);

  const [iconType, setIconType] = useState(true);

  const [error, setError] = useState(false);

  const inputRef = useRef(null);

  const onIconClick = () => {
    setDisabled(false);
    setIconType(false);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const onFocus = () => {
    setError(false);
  };

  const onBlur = (e) => {
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

NameInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  isIcon: PropTypes.bool.isRequired,
  extraClass: PropTypes.string,
};

export default NameInput;
