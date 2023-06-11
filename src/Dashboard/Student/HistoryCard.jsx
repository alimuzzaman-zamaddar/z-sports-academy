import React from "react";

const HistoryCard = () => {
  return (
    <div>
      <div className="">
        <div>
          <p>{history.transactionId}</p>
          <p>{history.price}</p>
          <p>{history.date}</p>
          <p>{history.email}</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
