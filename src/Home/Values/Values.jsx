import React from "react";
import "./Values.css";
import { FaIndustry, FaBrain, FaWhmcs, FaUsers } from "react-icons/fa";
const Values = () => {
  return (
    <>
      <div className="text-center py-8 text-white mb-5">
        <h1 className="text-center font-serif font-extrabold text-5xl mb-5">
          OUR COMPANY VALUES
        </h1>
        <p className="text-xl">WE ARE ALWAYS FOCUS ON INNOVATION AND NEW TECNIC</p>
      </div>

      <div className="grid md:grid-cols-2 py-5 my-10 border-[30px] border-purple-500 hover:border-purple-950 duration-1000">
        <div className=" text-white mt-10 p-10">
          <div
            className="flex "
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <span className="mr-5  text-4xl">
              <FaIndustry></FaIndustry>
            </span>
            <div className="mb-5">
              <h1 className=" text-4xl mb-4"> Innovative</h1>
              <p>
              Web development can assist businesses in broadening their reach and connecting 
              </p>
            </div>
          </div>

          <div
            className="flex "
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <span className="mr-5  text-4xl">
              <FaBrain></FaBrain>
            </span>
            <div className="mb-5">
              <h1 className=" text-4xl mb-4"> Talent</h1>
              <p>
              SEO-optimized website can attract visitors from all over the world and drive more traffic to the business
              </p>
            </div>
          </div>

          <div
            className="flex"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <span className="mr-5 text-4xl">
              <FaWhmcs></FaWhmcs>
            </span>
            <div className="mb-5">
              <h1 className="text-4xl mb-4"> Enabling</h1>
              <p>
              value you can prove to your buyers! If you have a web design business, an SEO company or some other ..
              </p>
            </div>
          </div>

          <div
            className="flex "
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <span className="mr-5  text-4xl">
              <FaUsers></FaUsers>
            </span>
            <div className="mb-5">
              <h1 className=" text-4xl mb-4"> Commercially responsible</h1>
              <p>
              The answer depends entirely upon what type of work you are doing. There are two different types of 
              </p>
            </div>
          </div>
        </div>
        <div
          className=""
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <img
            className="h-[550px] w-[550px] mt-5 p-10 rounded-full border-[30px] hover:border-purple-950 duration-1000 border-purple-700 hover:drop-shadow-xl"
            src="https://img.freepik.com/free-vector/summer-sports-concept_1284-9394.jpg?w=2000"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Values;
