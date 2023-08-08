import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/winners/winner1.jpg";
import img2 from "../../assets/winners/winers2.jpg";
import img3 from "../../assets/winners/winners.jpg";
import img4 from "../../assets/winners/winners4.jpg";
import img5 from "../../assets/winners/winners5.jpg";
import img6 from "../../assets/winners/winners6.jpg";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();

const Winners = () => {
  return (
    <>
      <h1 className="text-center text-7xl font-extrabold font-serif mt-10 text-white">
        Winners Section
      </h1>
      <p className="md:w-1/2 text-center md:mx-auto text-white">
        Here you can see some of our warning students of our academy.and if you
        want you can take there place as well.if you want and if you try
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-9 py-24  ">
        <div
          className="w-full h-[450px] overflow-hidden hover:border-[30px] border-purple-400 hover:rounded-3xl duration-1000"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="w-full h-[450px] rounded-3xl hover:scale-150 duration-1000 "
            src={img1}
            alt=""
          />
        </div>
        <div
          className="w-full h-[450px] overflow-hidden hover:border-[30px] border-purple-400 hover:rounded-3xl duration-1000"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="w-full h-[450px] rounded-3xl hover:scale-150 duration-1000 "
            src={img2}
            alt=""
          />
        </div>
        <div
          className="w-full h-[450px] overflow-hidden hover:border-[30px] border-purple-400 hover:rounded-3xl duration-1000"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="w-full h-[450px] rounded-3xl hover:scale-150 duration-1000 "
            src={img3}
            alt=""
          />
        </div>
        <div
          className="w-full h-[450px] overflow-hidden hover:border-[30px] border-purple-400 hover:rounded-3xl duration-1000"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="w-full h-[450px] rounded-3xl hover:scale-150 duration-1000 "
            src={img4}
            alt=""
          />
        </div>
        <div
          className="w-full h-[450px] overflow-hidden hover:border-[30px] border-purple-400 hover:rounded-3xl duration-1000"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="w-full h-[450px] rounded-3xl hover:scale-150 duration-1000 "
            src={img5}
            alt=""
          />
        </div>
        <div
          className="w-full h-[450px] overflow-hidden hover:border-[30px] border-purple-400 hover:rounded-3xl duration-1000"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="w-full h-[450px] rounded-3xl hover:scale-150 duration-1000 "
            src={img6}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Winners;
