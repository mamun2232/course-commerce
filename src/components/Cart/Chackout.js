import React from "react";
import Shipping from "./Shipping";

const Chackout = () => {
  return (
    <div className="my-5">
      <div className="container">
        <div className="card p-5 w-75 mx-auto">
          <div className="paymentStrip d-flex  gap-5 rounded border w-50 ">
            <span className="personal px-4 py-">Personal Info</span>
            <span>Order Review</span>
            <span>Payment</span>
          </div>
          <div className="mt-5">
            <Shipping/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chackout;
