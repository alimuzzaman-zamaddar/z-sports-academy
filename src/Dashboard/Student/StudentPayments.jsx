import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Pages/Providers/AuthProviders';

const StudentPayments = () => {
    const {user} = useContext(AuthContext)
    const [myPayments,setMyPayments] =  useState([])
    fetch('https://zamaddar-sports-club-server.vercel.app/payments')
    .then(res => res.json())
    .then(data => setMyPayments(data))

    const payments =myPayments.filter(pay => pay.email == user?.email)
    console.log(payments)
    
    return (
        <div>
            {
                payments.map(history =>    <div key={history._id}>

                    <div>
                        <p>{history.transactionId}</p>
                        <p>{history.price}</p>
                        <p>{history.date}</p>
                        <p>{history.email}</p>

                    </div>


                </div>   )
            }
            
        </div>
    );
};

export default StudentPayments;