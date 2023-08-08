import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructor] = useState([]);

  useEffect(() => {
    fetch("https://zamaddar-sports-club-server.vercel.app/popularInstructor")
      .then((res) => res.json())
      .then((data) => setPopularInstructor(data));
  }, []);
  console.log(popularInstructors);

  return (
    <>
    <h1 className="text-center text-7xl font-extrabold font-serif pt-12 text-white">Popular instructor section</h1>
    <p className="md:w-1/2 md:mx-auto text-center font-bold font-serif pb-11 mt-6 text-white">success Story : Passionate yoga instructor specializing in Hatha and Vinyasa flow. Creates a serene and inclusive atmosphere for students of all levels. Focuses on breath control, alignment, and mindfulness. Join Emily's classes to improve flexibility, strength, and inner balance.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {popularInstructors.map((ins) => (
          <div key={ins._id} className="grid grid-cols-2 gap-6 p-10  bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900 border-[2px]" data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
            <div className="popular-instructor-img h-[300px] w-full overflow-hidden ">
              <img className="h-[300px] w-full  hover:scale-125 duration-1000" src={ins.image} alt="" />
            </div>
            <div className="mt-5 text-white">
              <p>Coach :{ins.name}</p>
              <p>Expertise : {ins.expertise}</p>
              <p>Enrolled : {ins.students}</p>
              <p>success Story : {ins.details}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularInstructors;
