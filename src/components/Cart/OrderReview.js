import React from "react";
import Review from "./Review";

const OrderReview = () => {
  return (
    <div className="my-5">
      <div className="container">
        <div className="card p-5 w-75 sm:w-10 mx-auto">
          <div className="paymentStrip d-flex  gap-3 rounded border w-50 ">
            {/* <div>

            </div> */}
            <span className="personal px-4 py-">Personal Info</span>
            <span className="personal">Order Review</span>
            <span>Payment</span>
          </div>
          <div className="mt-5">
            <Review />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
