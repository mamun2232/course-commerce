import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Loading from "../Utilites/Loading";

const MyOrder = () => {
  const [myOrder, setMyOrder] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const userId = localStorage.getItem("userId");
    fetch(`http://localhost:5000/api/v1/order/myOrder/${userId}   `)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMyOrder(data?.order);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  console.log(myOrder);
  return (
    <div class="row my-5">
      <h3 class="fs-4 mb-3">Recent My Orders</h3>
      <div class="col">
        <table class="table bg-white rounded shadow-sm  table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Quentity</th>
              <th scope="col">Price</th>
              <th scope="col">Total Price</th>
              <th scope="col">Order Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {myOrder?.map((order) => {
              return order?.orderItems?.map((myOrders) => (
                <tr key={myOrders?._id}>
                  <th scope="row">{myOrders?.name}</th>
                  <td>{myOrders?.quantity}</td>
                  <td>{myOrders?.price}</td>
                  <td>{myOrders?.totalPrice}</td>
                  <td>{order?.orderStatus}</td>
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
  );
};

export default MyOrder;
