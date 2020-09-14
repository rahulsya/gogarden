import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as PlantSvg } from "../../assets/images/gardening.svg";

import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
export default function hero() {
  return (
    <div>
      <div className="flex flex-row justify-center items-center px-12">
        <Fade bottom>
          <div className="font-normal text-sm capitalize text-center lg:text-left font-semibold">
            <h1 className="text-3xl  text-green-600">
              Tanam Sayuran mu sendiri
            </h1>
            <h1 className="text-3xl mb-2 text-green-600">Menanam Dari Rumah</h1>
            <p className="text-green-800">
              memberi dampak yang lebih baik<br></br> kepada lingkungan dengan
              menanam
            </p>
            <p className="text-green-800">
              kami akan mengajarkan from zero to hero
            </p>
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="text-xl py-2 px-2 rounded mt-4 bg-green-500 text-gray-100 capitalize"
              >
                Start Shopping
              </motion.button>
            </Link>
          </div>
        </Fade>
        <Fade right>
          <div className="lg:w-3/5 hidden lg:block">
            <div className="bg-white">
              <PlantSvg className="w-full " />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
