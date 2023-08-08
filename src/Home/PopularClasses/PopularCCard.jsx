import React from "react";
import "./PopularClasses";

const PopularCCard = ({ pClass }) => {
  return (
    <div
      className="p-7 shadow-2xl bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900 class-card text-white"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <img className="w-full h-[300px] class-img" src={pClass.photo} alt="" />
      <div className="py-5">
        <div className="text-xl">
          <p>Class Name : {pClass.Name}</p>
          <p>Instructor : {pClass.IName}</p>
          <p>Enrolled Students : {pClass.enrolled}</p>
          <p>Price : ${pClass.price}</p>
        </div>
      </div>
    </div>
  );
};

export default PopularCCard;
