import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import Loading from "../Utilites/Loading";
const Register = () => {
  const [agree, setAgree] = useState(false);
  const [user, loadings, error] = useAuthState(auth);
  const [createUserWithEmailAndPassword, Cuser, loading, Cerror] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, Uerror] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
  
    if (data.password == data.confromPiassword) {
      const name = `${data.fistName} ${data.lastName}`;
      const userInfo = {
        name,
        email: data.email,
      };

      fetch("https://ancient-earth-39666.herokuapp.com/api/v1/user/register", {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then(async (result) => {
          console.log(result);
          if (result.success) {
            toast.success("User Signup Successfull");

            await createUserWithEmailAndPassword(data.email, data.password);
            await updateProfile({ displayName: name });
            // navigate("/login");
            localStorage.setItem("Token", result?.token);
            localStorage.setItem("userId", result.user._id);
          } else {
            toast.error(result.message);
          }
        });
    } else {
      toast.error("Password dont Match");
    }
  };

  let errorMessage;
  if (Cerror || Uerror) {
    errorMessage = Cerror?.message || Uerror?.message;

    toast.error(errorMessage);
  }

  if (loading || loadings) {
    return <Loading />;
  }

  if (user) {
    navigate("/");
    // if(userId){
    //   disPatch(fetchUserAvater(userId));

    // }
  }
  console.log(agree);
  return (
    <div className="my-5 container">
      <div className="card loginContainer shadow-sm mx-auto p-4 ">
        <div>
          <h2 className="text-center mt-3">MBGD</h2>
          <h2 className="mt-4">Sign Up</h2>
          <p>Please fill in this form to create an account!</p>

          <div className="cardTop mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputGAp mt-3">
              <div className="">
                <input
                  {...register("fistName", {
                    required: {
                      value: true,
                      message: "fistName is Required",
                    },
                  })}
                  placeholder="FistName"
                  className="loginInput"
                  name="fistName"
                  id="fistName"
                />
                <label class="label">
                  {errors.fistName?.type === "required" && (
                    <span className="text-danger">
                      {errors.fistName.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="">
                <input
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "lastName is Required",
                    },
                  })}
                  placeholder="LastName"
                  className="loginInput"
                  name="lastName"
                  id="lastName"
                />
                <label class="label">
                  {errors.lastName?.type === "required" && (
                    <span className="text-danger">
                      {errors.lastName.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="mt-3">
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
                name="email"
                id="email"
              />
              <label class="label">
                {errors.email?.type === "required" && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
              </label>
            </div>

            <div className="mt-3">
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
                name="password"
                id="password"
              />
              <label class="label">
                {errors.password?.type === "required" && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
              </label>
            </div>

            <div className="mt-3">
              <input
                {...register("confromPiassword", {
                  required: {
                    value: true,
                    message: "confromPiassword is Required",
                  },
                })}
                type="password"
                placeholder="Password"
                className="EmailInput"
                name="confromPiassword"
                id="confromPiassword"
              />
              <label class="label">
                {errors.confromPiassword?.type === "required" && (
                  <span className="text-danger">
                    {errors.confromPiassword.message}
                  </span>
                )}
              </label>
            </div>

            <div className="mt-2">
              <input
                onClick={() => setAgree(!agree)}
                type="checkbox"
                name=""
                id=""
              />
              <span className={`${agree ? "" : "text-danger"}`}>
                {" "}
                I accept the Terms of Condition & Privacy Policy
              </span>
            </div>
            <div>
              <div className="mt-3">
                <input
                  disabled={!agree}
                  className="btn btn-primary px-5"
                  type="submit"
                  value="SingUp"
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <p className="text-center mt-2">
        Already have an account?{" "}
        <span onClick={() => navigate("/login")} className="text-primary pinter">
          Login here
        </span>{" "}
      </p>
    </div>
  );
};

export default Register;
