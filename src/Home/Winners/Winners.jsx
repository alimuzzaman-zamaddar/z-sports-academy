import React from "react";
import { motion } from "framer-motion";

const Winners = () => {
  return (
    <>
      <h1 className="text-center text-7xl font-extrabold font-serif">
        Winners Section
      </h1>
      <p className="md:w-1/2 text-center md:mx-auto">
        Here you can see some of our warning students of our academy.and if you
        want you can take there place as well.if you want and if you try
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-9 py-24  ">
        <motion.div
          whileHover={{ scale: 1, rotate: 90 }}
          whileTap={{
            scale: 1,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          <img
            className="w-full h-[450px] rounded-xl"
            src=""
            alt=""
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1, rotate: 90 }}
          whileTap={{
            scale: 1,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          <img
            className="w-full h-[450px] rounded-xl"
            src=""
            alt=""
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1, rotate: 90 }}
          whileTap={{
            scale: 1,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          <img
            className="w-full h-[450px] rounded-xl"
            src=""
            alt=""
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1, rotate: 90 }}
          whileTap={{
            scale: 1,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          <img
            className="w-full h-[450px] rounded-xl"
            src=""
            alt=""
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1, rotate: 90 }}
          whileTap={{
            scale: 1,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          <img
            className="w-full h-[450px] rounded-xl"
            src=""
            alt=""
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1, rotate: 90 }}
          whileTap={{
            scale: 1,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          <img
            className="w-full h-[450px] rounded-xl"
            src=""
            alt=""
          />
        </motion.div>
      </div>
    </>
  );
};

export default Winners;
