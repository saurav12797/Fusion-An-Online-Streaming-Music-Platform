import React, { FC } from "react";
import { Field, ErrorMessage } from "formik";
import { Input } from "antd";
import Error from "../Error";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

type Type =
  | "text"
  | "number"
  | "hidden"
  | "color"
  | "button"
  | "checkbox"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "image"
  | "month"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search";

interface InputFieldProps {
  title?: string,
  type: Type;
  name: string;
  placeholder: string;
  inputType?: "primary" | "add-item";
  size?: "large";
  noError?: boolean;
  addonAfter?: any;
  addonBefore?: any;
  setFieldValue?: (name: string, value: number) => void;
  currentValue?: any;
  onChangeHandler?: (value: number) => void;
  disabled?: boolean;
  className?: string;
  maxlength?: string,
}

const InputField: FC<InputFieldProps> = (props) => {
  const { title, name, inputType, noError, size, setFieldValue, currentValue, onChangeHandler, className } = props;

  let itemProps = {
    ...props,
  };

  const updateValue = (type: "add" | "minus") => {
    const value = parseInt(currentValue);
    if(type === "minus") {
      setFieldValue && setFieldValue(name, value - 1)
      onChangeHandler && onChangeHandler(value - 1);
    } else {
      setFieldValue && setFieldValue(name, value + 1)
      onChangeHandler && onChangeHandler(value + 1);
    }
  }

  if (inputType === "add-item") {
    itemProps = {
      ...itemProps,
      addonAfter: <PlusOutlined onClick={() => updateValue("add")} className="cursor-pointer" />,
      addonBefore: <MinusOutlined onClick={() => updateValue("minus")} className={`cursor-pointer ${parseInt(currentValue) === 1 && "pointer-none"} `} />,
    };
  }

  return (
    <div>
      <label htmlFor="title">{title}</label>
      <Field
        as={Input}
        {...itemProps}
        className={`${inputType === "primary" && "primary-ant-input"} ${
          size === "large" && "ant-input-large"
        } ${inputType === "add-item" && "add-item-input"} ${className}`}
      />
      {!noError && (
        <ErrorMessage name={name}>
          {(message: string) => <Error message={message} />}
        </ErrorMessage>
      )}
    </div>
  );
};

export default InputField;
