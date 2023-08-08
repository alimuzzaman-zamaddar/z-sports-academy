import React, { useEffect, useState } from "react";
import "./PopularClasses.css";
import PopularCCard from "./PopularCCard";

const PopularClasses = () => {
  const [pClass,setPClass] = useState([])
  useEffect(() => {
    fetch('https://zamaddar-sports-club-server.vercel.app/popularClass')
    .then(res => res.json())
    .then(data => setPClass(data))

  },[])
   console.log(pClass)
  return (
    <>
    <h1 className="text-center text-7xl font-extrabold py-8 font-serif text-white">POPULAR CLASSES SECTION</h1>
    <p className="text-center pb-6 text-white">most popular classes are here and the best trainers are waiting for you </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {pClass.map((pClass) => (
          <PopularCCard key={pClass._id} pClass={pClass}></PopularCCard>
        ))}
      </div>
    </>
  );
};

export default PopularClasses;
