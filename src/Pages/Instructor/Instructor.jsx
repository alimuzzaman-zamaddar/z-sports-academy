import React, { useEffect, useState } from "react";
import InstructorCard from "./InstruictorCard";

const Instructor = () => {
  const [instructors, setInstructor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructor")
      .then((res) => res.json())
      .then((data) => setInstructor(data));
  }, []);
  return (
    <>
      <h1 className="text-center font-extrabold text-7xl py-12">
        Here Is Our World best Instructors
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12  mb-20">
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor._id}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
    </>
  );
};

export default Instructor;
