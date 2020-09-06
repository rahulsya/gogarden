import React from "react";
import { ReactComponent as PlantSvg } from "../../assets/images/gardening.svg";

export default function hero() {
  return (
    <div>
      <div className="flex flex-row justify-center items-center px-12">
        <div className="font-normal text-sm capitalize text-center lg:text-left">
          <h1 className="text-3xl">Growing your vegetable</h1>
          <h1 className="text-3xl mb-2">gardening at home</h1>
          <p>grow it yourself, plan a farm garden now.</p>
          <p>we will teach you, from zero to hero</p>
          <button className="text-xl py-3 px-2 rounded mt-4 bg-green-500 text-gray-100">
            Show me more
          </button>
        </div>
        <div className="lg:w-3/5 hidden lg:block">
          <div className="bg-white">
            <PlantSvg className="w-full " />
          </div>
        </div>
      </div>
    </div>
  );
}
