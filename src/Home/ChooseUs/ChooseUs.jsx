import React from "react";
import "./ChooseUs.css";
import { FaPlayCircle } from "react-icons/fa";
import imgChoose from "../../assets/choose/choose.png";

const ChooseUs = () => {
  return (
    <>
      <div className="text-center py-12">
        <h1 className="text-[#05386B] text-6xl font-serif mb-8">
          Why people choose us
        </h1>
        <p className=" text-lg text-[#05386B]">
          People choose us to do some great thighs together to make the place
          liveable.
        </p>
      </div>
      <div
        className="grid md:grid-cols-2 border-[2px] border-[#05386B] p-11"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <div className="flex justify-center items-center">
          <div className="about-details">
            <img src={imgChoose} alt="" />
            <a className="animation-btn " href="#">
              <FaPlayCircle className="play-icon"></FaPlayCircle>
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="feature-item mt-4 text-center text-white border-2"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <div className="fi-icon">
              <i className="feature-icon">
                <FaPlayCircle className="r-icon"></FaPlayCircle>
              </i>
            </div>
            <h3 className="py-4">Guarantee</h3>
            <p>
            The answer depends entirely upon what type of work you are doing. There are two different types of good.
            </p>
          </div>
          <div
            className="feature-item mt-4 text-center border-2"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <div className="fi-icon">
              <i className="feature-icon">
                <FaPlayCircle className="r-icon"></FaPlayCircle>
              </i>
            </div>
            <h3 className="py-4">Behavior</h3>
            <p>
           You are doing. There are two different types of The answer depends entirely upon what type of work.
            </p>
          </div>
          <div
            className="feature-item mt-4 text-center border-2 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <div className="fi-icon">
              <i className="feature-icon">
                <FaPlayCircle className="r-icon"></FaPlayCircle>
              </i>
            </div>
            <h3 className="py-4">Dedication</h3>
            <p>
             There are two different types of The answer depends entirely upon what type of work You are doing..
            </p>
          </div>
          <div
            className="feature-item mt-4 text-center border-2"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <div className="fi-icon">
              <i className="feature-icon">
                <FaPlayCircle className="r-icon"></FaPlayCircle>
              </i>
            </div>
            <h3 className="py-4">Exprience</h3>
            <p>
            Different types of The answer depends entirely upon what type of work You are working
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
