import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Loading from "../Utilites/Loading";

const ManageOrder = () => {
  const [manageOrder, setManageOrder] = useState([]);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/v1/order `)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setManageOrder(data?.order);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="my-5">
      <div class="row my-5">
        <h3 class="fs-4 mb-3">Manage Order</h3>
        <div class="col">
          <table class="table bg-white rounded shadow-sm  table-hover">
            <thead>
              <tr>
                <th scope="col">NAME</th>
                <th scope="col">QUENTITY</th>
                <th scope="col">PRICE</th>
                <th scope="col">Total Price</th>
                <th scope="col">PAYMENT STATUS</th>
                <th scope="col">ORDER STATUS</th>
                <th scope="col">ORDER SHIPPED</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {manageOrder?.map((order) => {
                console.log(order);
                return order?.orderItems?.map((myOrders) => (
                  <tr key={myOrders?._id}>
                    <th scope="row">{myOrders?.name}</th>
                    <td>{myOrders?.quantity}</td>
                    <td>{myOrders?.price}</td>
                    <td>{order?.totalPrice}</td>
                    <td>{order?.paymentInfo?.status}</td>

                    <td>{order?.orderStatus}</td>
                    <td>
                      <button
                        onClick={() =>
                          navigate(
                            `/dashboard/manageOrder/details/${order?._id}`
                          )
                        }
                        className="btn btn-warning"
                      >
                        Shipped Now
                      </button>
                    </td>
                    <td>
                      <span className="delete-btn">
                        <AiFillDelete />
                      </span>
                    </td>
                  </tr>
                ));
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
