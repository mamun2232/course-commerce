import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Loading from "../Utilites/Loading"
const Contect = () => {
  const [contect, setContect] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/v1/contect/contect")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setContect(data.contect);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
  }, []);
 console.log(contect)
  if (loading) return <Loading />;

  return <div>



<div className="card p-5">
        <div class="row my-5">
          <h3 class="fs-4 mb-3">All Contect List</h3>
          <div class="col">
          <div className="overflow-auto">
          <table class="table bg-white rounded shadow-sm  table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">View Message</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {contect?.map((userss) => (
                  <tr key={userss?._id}>
                    <th scope="row">{userss?.name}</th>
                    <td>{userss.email}</td>
                    <td>{userss.phone}</td>
                    <td>
                    
                      <button
                        // onClick={() => handleShow(userss?._id)}
                        className="btn btn-warning"
                      >
                        View Message
                      </button>
                    </td>

                    <td>
                      <span
                       
                        className="delete-btn"
                      >
                       
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


  </div>;
};

export default Contect;
