import React, { useState } from "react";

import InputText from "../InputText";

export default function CheckoutForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
  });

  const [hasError, setHasError] = useState(null);

  const onHandeChange = (e) => {
    const target = e.target;
    const type = target.type;
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    let pattern = "";
    if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (type === "email") {
      if (!pattern.test(e.target.value)) {
        setHasError("format email is incorrect");
      } else {
        setHasError(null);
      }
    }
  };

  return (
    <div>
      <div className="title text-lg font-semibold">Complete Address</div>
      {/* form here */}
      <div className="form">
        <div className="flex mt-5">
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              FullName
            </label>
            <InputText
              type="text"
              name="fullName"
              onChange={onHandeChange}
              value={form.fullName}
            />
          </div>

          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Email
            </label>
            <InputText
              type="email"
              name="email"
              onChange={onHandeChange}
              value={form.email}
            />
            <span className="font-semibold text-sm text-red-400 capitalize">
              {hasError}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
