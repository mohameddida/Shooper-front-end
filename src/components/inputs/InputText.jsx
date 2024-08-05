import React from "react";

const InputText = (props) => {
  return (
    <input
      className=""
      type={props.type}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

export default InputText;
