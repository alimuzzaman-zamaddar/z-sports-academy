import React from 'react';

const PopularCCard = ({pClass}) => {
    return (
        <div className="p-7">
        <img className="w-full h-[500px]" src={pClass.photo} alt="" />
        <div className=" py-5">
          <div className=" font-bold text-xl text-center">
            <p>Class Name : {pClass.Name}</p>
            <p>Instructor : {pClass.IName}</p>
            <p>Sets : {pClass.sets}</p>
            <p>Price : ${pClass.price}</p>
          </div>
        </div>
      </div>
    );
};

export default PopularCCard;