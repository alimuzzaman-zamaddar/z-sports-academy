import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Pages/Providers/AuthProviders';

const StudentPayments = () => {
    const {user} = useContext(AuthContext)
    const [myPayments,setMyPayments] =  useState([])
    fetch(`https://zamaddar-sports-club-server.vercel.app/payments?email=${user?.email}`)
    .then(res => res.json())
    .then(data => console.log(data))
    
    return (
        <div>
            
        </div>
    );
};

export default StudentPayments;