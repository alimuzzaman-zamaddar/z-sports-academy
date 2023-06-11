import React, { useContext, useState } from "react";
import { AuthContext } from "../../Pages/Providers/AuthProviders";
import HistoryCard from "./HistoryCard";

const StudentPayments = () => {
  const { user } = useContext(AuthContext);
  const [myPayments, setMyPayments] = useState([]);
  fetch("https://zamaddar-sports-club-server.vercel.app/payments")
    .then((res) => res.json())
    .then((data) => setMyPayments(data));

  const payments = myPayments.filter((pay) => pay.email == user?.email);
  console.log(payments);

  return (
    <div className="py-28 grid grid-cols-4 gap-9">

        {
            payments.map(history =>  <HistoryCard history={history} key={history._id}></HistoryCard>)
        }

    </div>
  );
};

export default StudentPayments;
