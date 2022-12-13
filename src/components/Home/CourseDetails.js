import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MapContainer, Marker, Popup } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../Redux/Slice/cartSlice";
import { fetchSinglecourse } from "../Redux/Slice/singleCourseSlice";
import Loading from "../Utilites/Loading";
import { TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const CourseDetails = () => {
  const [quantity, setquantity] = useState(1);

  const Zooms = 9;

  const { id } = useParams();
  const disPatch = useDispatch();
  const course = useSelector((state) => state.course);

  useEffect(() => {
    disPatch(fetchSinglecourse(id));
  }, [id]);

  // if(course){
  //   // setCenter([...course?.course?.course?.courseLocation])

  // }

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

  const maptiler = {
    url: "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=GenbiKMP4GMLsKvVjZHt",
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`,
  };

  const markerIcon = new L.Icon({
    iconUrl:
      "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png",
    iconSize: [35, 45],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });
 
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
        <div className="cardTop my-4"></div>
        <div className="row">
          <div className="col-8">
            <div>
              <h5 className="font-weight-bold">Course About:</h5>{" "}
              <p>{course?.course?.course?.about}</p>
            </div>
            <div className="mt-4">
              <h5 className="font-weight-bold">Course Goal:</h5>{" "}
              <p>{course?.course?.course?.goal}</p>
            </div>
            <div className="mt-4">
              <h5 className="font-weight-bold">Course Mession:</h5>{" "}
              <p>{course?.course?.course?.mission}</p>
            </div>
          </div>
          <div className="col-4  ">
            {!course?.course?.course?.lat && !course?.course?.course?.log ? (
              <>
                <Loading />
                <p className="text-center">Location Not Found</p>
              </>
            ) : (
              <MapContainer
                center={[
                  course?.course?.course?.lat,
                  course?.course?.course?.log,
                ]}
                zoom={Zooms}
              >
                <TileLayer
                  url={maptiler.url}
                  attribution={maptiler.attribution}
                />
                <Marker
                  icon={markerIcon}
                  position={[
                    course?.course?.course?.lat,
                    course?.course?.course?.log,
                  ]}
                >
                  <Popup>
                    Admin Course Location <br /> Here.
                  </Popup>
                </Marker>
              </MapContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
