import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const cart = useSelector((state) => state.cart.cart);
  const subtotal = useSelector((state) => state.subTotal.subTotal);
  const shipping = useSelector((state) => state.shipping.shipping);
  const totalCost = useSelector((state) => state.shipping.totalCost);
  const discount = useSelector((state) => state.shipping.discount);
  const navigate = useNavigate();
  return (
    <div className="my-5">
      <h5>Order History</h5>
      <div className="row">
        <div className="col-lg-4">
          <p>Total Order Item</p>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <p>{cart.length} PSC</p>
        </div>
      </div>

      <div>
        {cart?.map((myOrder) => (
          <div key={myOrder.id} className="row">
            <div className="col-lg-4">
              <b>{myOrder.name}</b>
            </div>
            <div className="col-lg-4">
              <p> {myOrder.quantity} PSC</p>
            </div>
            <div className="col-lg-4">
              <p> {myOrder.price} Tk</p>
            </div>
          </div>
        ))}

        <div className="cardTop"></div>
        <div className="row">
          <div className="col-lg-4">
            <p>Total Amount</p>
          </div>
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <p>{subtotal} TK</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <small>Discount</small>
          </div>
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <small>{discount} TK</small>
          </div>
        </div>
      </div>
      <div className="cardTop mt-2"></div>

      <div className="row">
        <div className="col-lg-4">
          <b>Total Cost</b>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <p>{totalCost} TK</p>
        </div>
      </div>


      <div className='my-5  d-flex justify-content-end '>
                  <button onClick={()=>navigate("/myCart/chackout/review/payment")}  className='myButton'>Confrom Order</button>

            </div>
    </div>
  );
};

export default Review;
