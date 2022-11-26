import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigete = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className="my-5 container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card loginContainer shadow-sm mx-auto p-4 ">
          <div>
            <h3 className="text-center">Login</h3>

            <div className="mt-4">
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is Required",
                  },
                })}
                type="email"
                placeholder="Email"
                className="EmailInput"
                name="country"
                id="country"
              />
              <label class="label">
                {errors.email?.type === "required" && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
              </label>
            </div>

            <div className="mt-4">
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is Required",
                  },
                })}
                type="password"
                placeholder="Password"
                className="EmailInput"
                name="country"
                id="country"
              />
              <label class="label">
                {errors.password?.type === "required" && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
              </label>
            </div>

            <div>
              <div className="mt-3">
                <input
                  className="btn btn-primary w-100"
                  type="submit"
                  value="SingUp"
                />
              </div>
              <p className=" text-end text-primary mt-2">Forgate Password?</p>
            </div>
          </div>
        </div>
      </form>

      <p className="text-center mt-2">
        <span onClick={() => navigete("/signUp")} className="text-primary">
          Create an Account
        </span>{" "}
      </p>
    </div>
  );
};

export default Login;
