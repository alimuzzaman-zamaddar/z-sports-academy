import React, { useEffect, useState } from 'react';
import ClassCard from './ClassCard/ClassCard';

const Classes = () => {
    const [userClasses,setUserClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/class')
        .then(res => res.json())
        .then(data => setUserClasses(data))
    },[])
    const approvedClasses = userClasses.filter(approve => approve.status == "approved")
    return (
     <div className='shadow-2xl'>
     <h1 className='text-center text-6xl font-extrabold pt-10'>Choose Your Interest</h1>
             <div className='grid grid-cols-1 md:grid-cols-3 gap-9 pt-10 pb-24'>
                {
                    approvedClasses.map(classItem => <ClassCard
                    key={classItem._id}
                    classItem={classItem}
                    ></ClassCard>)
                }        
        </div>
     </div>
    );
};

export default Classes;