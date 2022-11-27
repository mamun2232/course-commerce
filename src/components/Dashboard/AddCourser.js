import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddCourser = () => {
  const navigate = useNavigate();
  // const disPatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    //   disPatch(sendShipingInfoLocalSorage(data));
    //     navigate("/myCart/chackout/review");
  };
  return (
    <div className="my-5">
      <div className="card p-3">
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
                className="shippingInput"
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
                placeholder="images"
                className="shippingInput"
                type="file"
                name="images"
                id="images"
              />
              <label class="label">
                {errors.images?.type === "required" && (
                  <span className="text-danger">{errors.images.message}</span>
                )}
              </label>
            </div>
            {/* <div className="col-lg-6">
          <span className="label">Phone</span>
          <input
           {...register("phoneNo", {
            required: {
              value: true,
              message: "Phone Number is Required",
            },
          })}
            placeholder="Enter Your Phone"
            className="shippingInput"
            name=""
            id=""
          />
          <label class="label">
              {errors.phoneNo?.type === "required" && (
                <span className="text-danger">{errors.phoneNo.message}</span>
              )}
            </label>
        </div> */}
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
