import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MdAddPhotoAlternate } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import axios from "axios";
import toast from "react-hot-toast";
import swal from "sweetalert";
const AddCourser = () => {
  const navigate = useNavigate();
  // const disPatch = useDispatch();
  const [productPictue, setProductPicture] = useState("");
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
   
    const lat =  parseFloat(data.courseLocationLat)
    const log =  parseFloat(data.courseLocation)
    console.log(lat , log)
    const myForm = new FormData();
    myForm.append("name", data.name);
    myForm.append("category", data.category);
    myForm.append("description", data.description);
    myForm.append("Stock", data.Stock);
    myForm.append("price", data.price);
    myForm.append("courseTitle", data.courseTitle);
    // myForm.append("googleMap", data.googleMap);
    // myForm.append("user", userId);
    myForm.append("images", productPictue);
    myForm.append("about", data.about);
    myForm.append("mission", data.mission);
    myForm.append("goal", data.goal);
    myForm.append("lat", lat);
    myForm.append("log", log);
    await axios({
      method: "post",
      url: "https://course-commerce-back-end.vercel.app/api/v1/courses/course",
      data: myForm,
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${localStorage.getItem("UserToken")}`,
      },
    })
      .then((res) => {
        setProductPicture("");
        reset();
        swal({
          title: "Course Add Successfull",
          text: "Thank you Sir",
          icon: "success",
          buttons: [false],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const ProductPictureHendeler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProductPicture(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div className="my-5">
      <div data-aos="fade-right"  className="card p-3">
        <h5>Add Course</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row mt-5">
            <div className="col-lg-6 ">
              <span className="label">Course Name</span>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
                placeholder="Course Name"
                className="shippingInput"
                type="text"
                name="name"
                id="name"
              />
              <label class="label">
                {errors.name?.type === "required" && (
                  <span className="text-danger">{errors.name.message}</span>
                )}
              </label>
            </div>
            <div className="col-lg-6">
              <span className="label">Course Title</span>
              <input
                {...register("courseTitle", {
                  required: {
                    value: true,
                    message: "Course Title is Required",
                  },
                })}
                placeholder="Course Title"
                className="shippingInput"
                name="courseTitle"
                id="courseTitle"
              />
              <label class="label">
                {errors.courseTitle?.type === "required" && (
                  <span className="text-danger">
                    {errors.courseTitle.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6 ">
              <span className="label">Price</span>
              <input
                {...register("price", {
                  required: {
                    value: true,
                    message: "price is Required",
                  },
                })}
                placeholder="Price"
                className="shippingInput"
                type="number"
                name="price"
                id="price"
              />
              <label class="label">
                {errors.price?.type === "required" && (
                  <span className="text-danger">{errors.price.message}</span>
                )}
              </label>
            </div>
            <div className="col-lg-6">
              <span className="label">Category</span>
              <input
                {...register("category", {
                  required: {
                    value: true,
                    message: "category is Required",
                  },
                })}
                placeholder="Category"
                className="shippingInput"
                name="category"
                id="category"
              />
              <label class="label">
                {errors.category?.type === "required" && (
                  <span className="text-danger">{errors.category.message}</span>
                )}
              </label>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6 ">
              <span className="label">Stock</span>
              <input
                {...register("Stock", {
                  required: {
                    value: true,
                    message: "Stock is Required",
                  },
                })}
                placeholder="Stock"
                className="shippingInput"
                type="number"
                name="Stock"
                id="Stock"
              />
              <label class="label">
                {errors.Stock?.type === "required" && (
                  <span className="text-danger">{errors.Stock.message}</span>
                )}
              </label>
            </div>
            <div className="col-lg-6">
              <span className="label">Description</span>
              <textarea
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is Required",
                  },
                })}
                placeholder="Description"
                className="shippingInput h-50"
                name="description"
                id="description"
              />
              <label class="label">
                {errors.description?.type === "required" && (
                  <span className="text-danger">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6 ">
              <span className="label">Image</span>
              <input
                {...register("images", {
                  required: {
                    value: true,
                    message: "images is Required",
                  },
                })}
                onChange={(e) => ProductPictureHendeler(e)}
                type="file"
                name="image-uplode"
                id="product-img"
                hidden
                placeholder="images"
                className="shippingInput"

                // id="images"
              />
              <label htmlFor={!productPictue && "product-img"} className=" ">
                <div>
                  {!productPictue && (
                    <div className="add-image">
                      <div className=" ">
                        <span className="text-6xl text-[#EC255A]">
                          <MdAddPhotoAlternate />
                        </span>
                      </div>
                    </div>
                  )}
                  {productPictue && (
                    <div className="add-image">
                      <div className="mt-3 d-relative">
                        <img
                          className="h-44 w-72 p-1 rounded-lg"
                          src={productPictue}
                          alt="productPicure"
                        />
                        <span
                          onClick={() => setProductPicture("")}
                          className=" absolute text-2xl top-[5px] text-red-500 right-[5px] cursor-pointer"
                        >
                          <TiDelete />
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </label>
              <label class="label">
                {errors.images?.type === "required" && (
                  <span className="text-danger">{errors.images.message}</span>
                )}
              </label>
            </div>
            <div className="col-lg-6">
              <span className="label">Course About</span>
              <textarea
                {...register("about", {
                  required: {
                    value: true,
                    message: "about is Required",
                  },
                })}
                placeholder="About"
                className="shippingInput h-50"
                name="about"
                id="about"
              />
              <label class="label">
                {errors.about?.type === "required" && (
                  <span className="text-danger">
                    {errors.about.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-6 ">
              <span className="label">Course Goal</span>
              <input
                {...register("goal", {
                  required: {
                    value: true,
                    message: "goal is Required",
                  },
                })}
                placeholder="Goal"
                className="shippingInput"
                type="text"
                name="goal"
                id="goal"
              />
              <label class="label">
                {errors.goal?.type === "required" && (
                  <span className="text-danger">{errors.goal.message}</span>
                )}
              </label>
            </div>
            <div className="col-lg-6">
              <span className="label">Course Mession</span>
              <input
                {...register("mission", {
                  required: {
                    value: true,
                    message: "Mession is Required",
                  },
                })}
                placeholder="Course Title"
                className="shippingInput"
                name="mission"
                id="mission"
              />
              <label class="label">
                {errors.mission?.type === "required" && (
                  <span className="text-danger">
                    {errors.mission.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6 ">
              <span className="label">Add Your Google Langicute code</span>
              <input
                {...register("courseLocationLat", {
                  required: {
                    value: true,
                    message: "Code is Required",
                  },
                })}
                placeholder="Enter Your Carrent Loaction Code"
                className="shippingInput"
                type="text"
                name="courseLocationLat"
                id="courseLocationLat"
              />
              <label class="label">
                {errors.courseLocationLat?.type === "required" && (
                  <span className="text-danger">{errors.courseLocationLat.message}</span>
                )}
              </label>
            </div>
            <div className="col-lg-6 ">
              <span className="label">Add Your Google Laticite code</span>
              <input
                {...register("courseLocation", {
                  required: {
                    value: true,
                    message: "Code is Required",
                  },
                })}
                placeholder="Enter Your Carrent Loaction Code"
                className="shippingInput"
                type="text"
                name="courseLocation"
                id="courseLocation"
              />
              <label class="label">
                {errors.courseLocation?.type === "required" && (
                  <span className="text-danger">{errors.courseLocation.message}</span>
                )}
              </label>
            </div>
            
          </div>
          

          <div className="my-5  d-flex justify-content-center ">
            <input type="submit" value="Add Course" className="myButton" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourser;
