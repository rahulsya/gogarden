import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { GET_TOTAL } from "../store/action";

import { FaShoppingCart } from "react-icons/fa";
import Logo from "../assets/images/Logo.png";

function NavBar() {
  let amount = useSelector((state) => state.amount);
  let dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({
      type: GET_TOTAL,
    });
  }, [dispatch]);

  return (
    <header className=" bg-gray-100">
      <div className="container mx-auto px-5 py-4 ">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl text-green-500">
            <Link to="/">
              {/* <span className="font-extrabold">Go</span>Garden */}
              <img src={Logo} alt="logo" className="w-32" />
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
                <Link to="/cart" className="flex items-center">
                  Cart <FaShoppingCart />
                  {"  "}({amount})
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
// const mapStateToProps = (store) => {
//   const { amount } = store;
//   return { amount };
// };

export default NavBar;
