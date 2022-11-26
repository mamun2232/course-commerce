import React, { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import toast from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteToCart } from "../Redux/Slice/cartSlice";
import {
  addToShippingPrice,
  calculatetTotalTotalCost,
  promoDiscount,
} from "../Redux/Slice/shippingPriceSlice";
import { addToSbTotal } from "../Redux/Slice/subTotalSlice";

const Cart = () => {
  const [promoCode, setPromoCode] = useState("");
  const cart = useSelector((state) => state.cart.cart);
  const subTotal = useSelector((state) => state.subTotal.subTotal);
  ///
  const shippingPrice = useSelector((state) => state.shipping.shipping);
  const totalCost = useSelector((state) => state.shipping.totalCost);
  const discount = useSelector((state) => state.shipping.discount);
  const selectRef = useRef();

  const navigate = useNavigate();

  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(addToSbTotal(cart));
    //     const shippingPrice = parseInt(selectRef?.current?.value)
    disPatch(addToShippingPrice(shippingPrice));
    disPatch(calculatetTotalTotalCost(subTotal));
    setPromoCode("");
  }, [cart, shippingPrice, cart, subTotal]);

  const applayPromoCodeHendeler = () => {
    fetch(
      `https://ancient-earth-39666.herokuapp.com/api/v1/order/promo/?totalCost=${totalCost}&code=${promoCode}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          disPatch(promoDiscount(data.discountPrice));
          setPromoCode("");
          toast.success("congaculation you have 20% Descount.Happy Shopping");
        } else {
          toast.error("Sorry Promo code Dont Match");
          setPromoCode("");
        }
      });
  };

  const deleteCartItem = (id) => {
    disPatch(deleteToCart(id));
  };
  return (
    <div className="my-5">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-8">
            {/* <p>Shopping Cart</p> */}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>PICTURE</th>
                  <th>GOIF COURSE</th>
                  <th>QUANTITY</th>
                  <th>PRICE</th>
                  <th>TOTAL PRICE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {cart &&
                  cart?.map(({ id, name, price, quantity, totalPrice }) => (
                    <tr className="" key={id}>
                      <td>1</td>
                      <td>{name}</td>
                      <td>{quantity}</td>
                      <td>{price}</td>
                      <td>{totalPrice}</td>
                      <td>
                        <span
                          onClick={() => deleteCartItem(id)}
                          className=" delete-btn"
                        >
                          <AiFillDelete />
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
          <div className="col-lg-4">
            <div className="card p-3">
              <p>Order Summary</p>
              <div className="cardTop"></div>
              <div className="d-flex justify-content-between mt-3">
                <p>Total Item</p>
                <p>{cart.length} PSC</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>SubTotal</p>
                <p>{subTotal} TK</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Discount</p>
                <p>{discount} TK</p>
              </div>

              <div className="cardTop"></div>
              <div className="d-flex justify-content-between mt-1">
                <p>Total Price</p>
                <p>{totalCost} TK</p>
              </div>

              <div>
                <p className="py-0"> PROMO CODE</p>
                <div className=" d-flex gap-3">
                  <input
                    onChange={(e) => setPromoCode(e.target.value)}
                    value={promoCode}
                    className="inputFlied"
                    type="number"
                    placeholder="Enter Your Promo Code"
                  />

                  <button
                    disabled={discount}
                    onClick={() => applayPromoCodeHendeler()}
                    className="btn btn-warning"
                  >
                    APPLY
                  </button>
                </div>
                {discount ? (
                  <span className=" text-sm text-red-500" htmlFor="">
                    Congaculation you have 20% Descount.Happy Shopping
                  </span>
                ) : (
                  <span className=" text-sm text-red-500" htmlFor="">
                    Use Promo code Get 20% Discount
                  </span>
                )}

                <div className="my-4">
                  <button onClick={()=>navigate("/myCart/chackout")} className="btn btn-warning w-100">CheckOut</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
