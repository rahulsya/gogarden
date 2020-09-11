import React from "react";

import bcaImg from "../../assets/images/bank/logo-bca.jpg";
import mandiriImg from "../../assets/images/bank/logo-mandiri.jpg";

export default function BankAccount() {
  return (
    <div>
      <div className="font-semibold text-xl mb-5 mt-5 text-gray-800">
        Bank Account
      </div>
      <div
        className="flex flex-row items-center justify-between
            font-semibold text-lg text-gray-800 px-3 py-3 mb-4 shadow-lg rounded"
      >
        <img src={bcaImg} className=" w-16 h-16" alt="bca-logo" />
        <div>Josh Garden</div>
        <div>111-111-222-999</div>
      </div>

      <div
        className="flex flex-row items-center justify-between
            font-semibold text-lg text-gray-800 px-3 py-3 mb-4 shadow-lg rounded"
      >
        <img src={mandiriImg} className=" w-16 h-16" alt="bca-logo" />
        <div>Josh Garden</div>
        <div>333-111-222-999</div>
      </div>
    </div>
  );
}
