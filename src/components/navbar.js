import React from "react";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <header className=" bg-gray-100">
      <div className="container mx-auto px-5 py-4 ">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl text-green-500">
            <Link to="/">
              <span className="font-extrabold">Go</span>Garden
            </Link>
          </div>
          <nav className="">
            <ul className="flex items-center font-semibold text-green-500">
              <li className="mx-3">
                <Link to="/">Home</Link>
              </li>
              <li className="mx-3">
                <Link to="/products">Product</Link>
              </li>
              <li className="mx-3">
                <Link to="/">Contact</Link>
              </li>
              <li className="mx-3">
                <Link to="/how">How it works ?</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
