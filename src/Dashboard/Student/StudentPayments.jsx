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

  return (
    <>
    <h1 className="text-center text-6xl font-extrabold py-5">Your Payments</h1>
      <div className="pb-28 pt-6 grid grid-cols-3 gap-9 mx-auto">
        {payments.map((history) => (
          <HistoryCard history={history} key={history._id}></HistoryCard>
        ))}
      </div>
    </>
  );
};

export default StudentPayments;
