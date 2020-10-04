import React, { useState } from "react";
import { connect } from "react-redux";
import { SUBMIT_FORM } from "../../store/action";

import InputText from "../../components/InputText";

function CheckoutForm({ completedForm, sumbitForm }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const [hasError, setHasError] = useState({
    fullName: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const onHandeChange = (e) => {
    const target = e.target;
    const type = target.type;
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (type === "text") {
      if (target.value.length < 5) {
        setHasError({ ...hasError, [e.target.name]: "please fill this field" });
      } else {
        setHasError({ ...hasError, [e.target.name]: "" });
      }
    }

    let pattern = "";
    if (type === "email") {
      pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!pattern.test(e.target.value)) {
        setHasError({ ...hasError, email: "format email is incorrect" });
      } else {
        setHasError({ ...hasError, email: "" });
      }
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    completedForm(true);
    sumbitForm(form);
  };

  return (
    <div>
      <div className="title text-lg font-semibold">Complete Address</div>
      {/* form here */}
      <div className="form">
        <form action="#" onSubmit={handleOnSubmit}>
          <div className="flex mt-5">
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="fullname"
              >
                FullName
              </label>
              <InputText
                type="text"
                name="fullName"
                onChange={onHandeChange}
                value={form.fullName}
                placeholder="josh ipsum"
              />
              <span className="font-semibold text-sm text-red-400 capitalize">
                {hasError.fullName}
              </span>
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <InputText
                type="email"
                name="email"
                onChange={onHandeChange}
                value={form.email}
                placeholder="test@email.com"
              />
              <span className="font-semibold text-sm text-red-400 capitalize">
                {hasError.email}
              </span>
            </div>
          </div>

          <div className="flex mt-5">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <InputText
                type="text"
                name="phoneNumber"
                onChange={onHandeChange}
                value={form.phoneNumber}
                placeholder="+62.."
              />
              <span className="font-semibold text-sm text-red-400 capitalize">
                {hasError.phoneNumber}
              </span>
            </div>
          </div>

          <div className="flex mt-5">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <InputText
                type="text"
                name="address"
                onChange={onHandeChange}
                value={form.address}
                placeholder="street lorem ipsum no.24"
              />
              <span className="font-semibold text-sm text-red-400 capitalize">
                {hasError.address}
              </span>
            </div>
          </div>

          {/* buttn */}
          <div className="flex mt-5 justify-end">
            <div className="px-3">
              {form.fullName !== "" &&
                form.email !== "" &&
                form.phoneNumber !== "" &&
                form.address !== "" && (
                  <button
                    type="submit"
                    className="py-3 px-3 bg-green-500 text-white font-semibold font-lg"
                  >
                    Complete Order
                  </button>
                )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    sumbitForm: (data) => {
      dispatch({ type: SUBMIT_FORM, payload: data });
    },
  };
};
export default connect(null, mapDispatchToProps)(CheckoutForm);
