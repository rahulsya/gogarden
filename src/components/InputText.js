import React from "react";

export default function InputText({ name, type, onChange }) {
  return (
    <div>
      <input
        name={name}
        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        type={type}
        onChange={onChange}
      />
    </div>
  );
}
