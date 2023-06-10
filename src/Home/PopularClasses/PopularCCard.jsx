import React from 'react';

const PopularCCard = () => {
    return (
        <div className="">
        <img className="w-full" src={photo} alt="" />
        <div className="p-7 flex justify-between items-center">
          <div className=" font-bold text-xl ml-6">
            <p>Class Name : {Name}</p>
            <p>Instructor : {IName}</p>
            <p>Sets : {sets}</p>
            <p>Price : ${price}</p>
          </div>
        </div>
      </div>
    );
};

export default PopularCCard;