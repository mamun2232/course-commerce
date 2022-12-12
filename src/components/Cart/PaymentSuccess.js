import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartClear } from "../Redux/Slice/cartSlice";
import { clearShippingTotalCostDiscount } from "../Redux/Slice/shippingPriceSlice";
import { clearSubTotal } from "../Redux/Slice/subTotalSlice";

const PaymentSuccess = () => {
  const orderItems = useSelector((state) => state.cart.cart);
  const parseInfo = localStorage.getItem("ShippingInfo");
  const shippingInfo = JSON.parse(parseInfo);
  const navigate = useNavigate();

  const user = localStorage.getItem("userId");
  const subTotalPrice = parseInt(localStorage.getItem("SubTotalPrice"));
  // const shippingPrice = parseInt(localStorage.getItem("ShippingPrice"));
  const totalPrice = parseInt(localStorage.getItem("TotalCost"));
  const discount = parseInt(localStorage.getItem("Discount"));

  const paymentId = Math.floor(100000000 + Math.random() * 900000000);
  const disPatch = useDispatch();

  const paymentInfo = {
    id: paymentId,
    status: "paid",
  };

  useEffect(() => {
    const data = {
      shippingInfo,
      orderItems,
      user,
      paymentInfo,
      subTotalPrice,
      //   shippingPrice,
      totalPrice,
      discount: discount || 0,
    };

  
      fetch(`https://course-commerce-back-end.vercel.app/api/v1/order/new/${user}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("UserToken")}`,
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
          if (data.success) {
            localStorage.removeItem("SubTotalPrice");
            // localStorage.removeItem("ShippingPrice");
            localStorage.removeItem("TotalCost");
            localStorage.removeItem("Discount");
            localStorage.removeItem("Cart");
            disPatch(cartClear());
            disPatch(clearShippingTotalCostDiscount());
            disPatch(clearSubTotal());
          }
        });
    
  }, []);
  
  return (
    <div className="my-5">
      <div className="contianer">
        <div className="w-50  mx-auto card p-5">
          <img
            className="img-fluid rounded"
            src="/picture/payment.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
