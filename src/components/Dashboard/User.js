import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Loading from "../Utilites/Loading";

const User = () => {
  const [user, setUser] = useState([]);
  const [owner, setOwner] = useState([]);
  const [adviser, setAdviser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //     const userId = localStorage.getItem("userId");
    fetch(`https://ancient-earth-39666.herokuapp.com/api/v1/user/user`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(data?.user);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
    fetch(`https://ancient-earth-39666.herokuapp.com/api/v1/user/owner`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setOwner(data?.user);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
    fetch(`https://ancient-earth-39666.herokuapp.com/api/v1/user/adviser`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setAdviser(data?.user);
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
      <div className="card p-5">
        <div class="row my-5">
          <h3 class="fs-4 mb-3">All User</h3>
          <div class="col">
            <table class="table bg-white rounded shadow-sm  table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Make Admin</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {user?.map((user) => (
                  <tr key={user?._id}>
                    <th scope="row">{user?.name}</th>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <button className="btn btn-warning">Make Admin</button>
                    </td>

                    <td>
                      <span className="delete-btn">
                        <AiFillDelete />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div class="row my-5">
          <h3 class="fs-4 mb-3">All Owner</h3>
          <div class="col">
            <table class="table bg-white rounded shadow-sm  table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Make Admin</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {owner?.map((user) => (
                  <tr key={user?._id}>
                    <th scope="row">{user?.name}</th>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <button className="btn btn-warning">Make Admin</button>
                    </td>

                    <td>
                      <span className="delete-btn">
                        <AiFillDelete />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div class="row my-5">
          <h3 class="fs-4 mb-3">All Adviser</h3>
          <div class="col">
            <table class="table bg-white rounded shadow-sm  table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Make Admin</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {adviser?.map((user) => (
                  <tr key={user?._id}>
                    <th scope="row">{user?.name}</th>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <button className="btn btn-warning">Make Admin</button>
                    </td>

                    <td>
                      <span className="delete-btn">
                        <AiFillDelete />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
