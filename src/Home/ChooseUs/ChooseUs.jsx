import React from "react";
import "./ChooseUs.css";
import { FaPlayCircle } from "react-icons/fa";
import imgChoose from "../../assets/choose/choose.png";

const ChooseUs = () => {
  return (
    <>
      <div className="text-center py-12">
        <h1 className="text-white text-6xl font-serif mb-8">
          Why people choose us
        </h1>
        <p className=" text-lg text-white">
          People choose us to do some great thighs together to make the place
          liveable.
        </p>
      </div>
      <div
        className="grid md:grid-cols-2 border-[2px] p-11"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
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
            <h3 className="py-4">Guarantee</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
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
            <h3 className="py-4">Guarantee</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
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
            <h3 className="py-4">Guarantee</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
