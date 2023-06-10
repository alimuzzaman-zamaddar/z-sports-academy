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
            src="https://img.olympicchannel.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/axol3c2xv0pgd2dndoix"
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
            src="https://thumbs.dreamstime.com/z/bradley-wiggins-olympic-time-trial-26055594.jpg"
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
            src="https://thumbs.dreamstime.com/z/reese-hoffa-decanation-international-outdoor-games-september-paris-france-american-shot-putter-world-champion-won-bronze-59619722.jpg"
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
            src="https://thumbs.dreamstime.com/z/all-around-gymnastics-winners-rio-olympic-games-aliya-mustafina-l-simone-biles-aly-raisman-medal-ceremony-de-janeiro-75937483.jpg"
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
            src="https://i.dailymail.co.uk/i/pix/2012/08/12/article-0-148019B2000005DC-126_964x510.jpg"
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
            src="https://assets.entrepreneur.com/content/3x2/2000/20160809165428-GettyImages-587152278.jpeg"
            alt=""
          />
        </motion.div>
      </div>
    </>
  );
};

export default Winners;
