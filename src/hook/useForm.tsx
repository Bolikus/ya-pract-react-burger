import { ChangeEvent, useState } from "react";

const useForm = <T extends object>(inputValues: T) => {
  const [values, setValues] = useState(inputValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  return { values, setValues, handleChange };
};

export default useForm;
