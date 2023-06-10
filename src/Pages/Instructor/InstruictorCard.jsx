import React from 'react';

const InstructorCard = ({instructor}) => {
    const {name,image,email,expertise} = instructor;
    return (
        <div className='shadow-2xl hover:bg-sky-200 rounded-3xl'>
            <div className="p-10">
                <img className='w-full h-[500px] rounded-3xl shadow-lg' src={image} alt="" />
                <div className=" mt-5 text-xl font-semibold">
                    <p>Instructor : <strong>{name}</strong> </p>
                    <p>Instructor Email : <strong>{email}</strong> </p>
                    <p>Class Name : <strong>{expertise}</strong> </p>
                </div>
            </div>
            
        </div>
    );
};

export default InstructorCard;