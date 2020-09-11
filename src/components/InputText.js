import React from "react";
import { string, func } from "prop-types";

export default function InputText({ name, type, onChange, placeholder }) {
  return (
    <div>
      <input
        name={name}
        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

InputText.defaultProps = {
  type: "text",
  placeholder: "please type here..",
};

InputText.propType = {
  name: string.isRequired,
  type: string.isRequired,
  onChange: func.isRequired,
  placeholder: string.isRequired,
};
