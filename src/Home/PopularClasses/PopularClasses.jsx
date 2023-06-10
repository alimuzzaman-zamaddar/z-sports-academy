import React, { useEffect, useState } from "react";
import "./PopularClasses.css";
import useAllClasses from "../../Hooks/useAllClasses";
import PopularCCard from "./PopularCCard";

const PopularClasses = () => {
  const [AllClasses] = useAllClasses();

  const popularClasses = AllClasses.filter(
    (aclass) => aclass.status == "approved"
  );

  return (
    <div>
        {
            popularClasses.map(pClass =>  <PopularCCard key={pClass._id} pClass={pClass}></PopularCCard>)
        }

    </div>
  );
};

export default PopularClasses;
