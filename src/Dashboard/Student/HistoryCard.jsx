import React from "react";

const HistoryCard = ({history}) => {
  return (
    <div>
      <div className=" p-7 shadow-2xl">
        <div className="">
          <h1 className="text-center text-2xl font-bold mb-5">Payment History</h1>
          <p> <strong>transactionId :</strong> {history.transactionId}</p>
          <p> <strong>Paid Amount : </strong> {history.price}</p>
          <p> <strong>DATE :</strong> {history.date}</p>
          <p> <strong>Email :</strong> {history.email}</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
