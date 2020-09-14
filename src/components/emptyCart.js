import React from "react";
import { ReactComponent as EmptySvg } from "../assets/images/empty.svg";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function emptyCart({ message }) {
  return (
    <div className="container mx-auto px-5 mt-5">
      <Fade>
        <div className="flex flex-col justify-center items-center">
          <EmptySvg className="mx-auto" />
          <div className="capitalize text-center font-semibold text-2xl mb-4 text-green-800">
            {message}
          </div>
          <Link
            to="/products"
            className="px-3 py-3 rounded bg-green-500 hover:bg-green-300 w-64 text-white font-semibold text-center"
          >
            Start Shopping
          </Link>
        </div>
      </Fade>
    </div>
  );
}
