import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../Redux/Slice/cartSlice";
import { fetchSinglecourse } from "../Redux/Slice/singleCourseSlice";
import Loading from "../Utilites/Loading";

const CourseDetails = () => {
  const [quantity, setquantity] = useState(1);
  const [showMap, setShowMap] = useState(false);
  const { id } = useParams();
  const disPatch = useDispatch();
  const course = useSelector((state) => state.course);
  const position = [22.337153840738438, 91.83031289549679];
  useEffect(() => {
    disPatch(fetchSinglecourse(id));
  }, [id]);

  const increasequantity = () => {
    setquantity(quantity + 1);
  };
  const decreasequantity = () => {
    if (quantity > 1) {
      setquantity(quantity - 1);
    } else {
      alert("sorry");
    }
  };

  console.log(course);

  const addedToCartHendeler = () => {
    const totalPrice =
      parseInt(quantity) * parseInt(course?.course?.course?.price);
    const shoppingCart = {
      name: course?.course?.course?.name,
      image: course?.course?.course?.images[0]?.url,
      description: course?.course?.course?.description,
      price: course?.course?.course?.price,
      id: course?.course?.course?._id,
      quantity,
      product: course?.course?.course?._id,
      totalPrice,
    };
    disPatch(addToCart(shoppingCart));
    toast.success("Course Added To Cart");
  };

  
  return (
    <div className=" my-5">
      <div className="container">
        <div className="card detals-card p-5">
          <div className="row gx-5">
            {course.loading && (
              <p>
                <Loading></Loading>
              </p>
            )}
            {!course.loading && course.error ? <p>{course.error}</p> : ""}
            {!course.loading && course?.course?.course ? (
              <>
                <div
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className="col-lg-6 col-sm-6 gap-3"
                >
                  <img
                    className="img-fluid rounded"
                    src={course?.course?.course?.images[0]?.url}
                    alt=""
                  />
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className="col-lg-6 gap-3"
                >
                  <small className="text-muted py-0">
                    {course?.course?.course?.category}
                  </small>
                  <h3 className="py-0">{course?.course?.course?.name}</h3>

                  <p>{course?.course?.course?.courseTitle}</p>
                  <div className="w-75 mt-3">
                    <p>{course?.course?.course?.description}</p>
                    <div className="counterCard mt-5 d-flx   justify-content-between">
                      <div className="d-flex gap-2">
                        <button
                          onClick={() => decreasequantity()}
                          className="btn btn-warning"
                        >
                          -
                        </button>
                        <span className="count">{quantity}</span>
                        <button
                          onClick={() => increasequantity()}
                          className="btn btn-warning"
                        >
                          +
                        </button>
                      </div>
                      <div className="mt-3">
                        <h6>
                          Avalible quantity: {course?.course?.course?.Stock}
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div className="cardTop my-3"></div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h3>{course?.course?.course?.price}$</h3>
                    </div>
                    <div>
                      <button
                        onClick={() => addedToCartHendeler()}
                        className="btn btn-warning"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>

                  {/* <div className="mt-3 text-center px-4">
                    <button
                      onClick={() => setShowMap(!showMap)}
                      className="btn btn-warning"
                    >
                      {!showMap ? "Find Course Location" : "Hide Google Map"}
                    </button>
                  </div> */}
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* {showMap && (
          <>
            <div
              style={{ width: 1030 }}
              className=" card d-none d-md-none d-sm-none d-lg-block p-3 mt-5"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29523.01869715693!2d91.82962625!3d22.33937675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a71c5c3451%3A0x8145d1408572eb24!2sKotwali%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1670164141099!5m2!1sen!2sbd"
                width={"1000"}
                height="450"
                loading="lazy"
              ></iframe>
            </div>
            <div
              style={{ width: 630 }}
              className=" card d-none d-sm-none d-md-block d-lg-none p-3 mt-5"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29523.01869715693!2d91.82962625!3d22.33937675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a71c5c3451%3A0x8145d1408572eb24!2sKotwali%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1670164141099!5m2!1sen!2sbd"
                width={"600"}
                height="450"
                loading="lazy"
              ></iframe>
            </div>

            <div
              style={{ width: 330 }}
              className="d-sm-block d-md-none d-lg-none card p-3 mt-5"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29523.01869715693!2d91.82962625!3d22.33937675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a71c5c3451%3A0x8145d1408572eb24!2sKotwali%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1670164141099!5m2!1sen!2sbd"
                width={"300"}
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </>
        )} */}
      </div>
    </div>
  );
};

export default CourseDetails;
