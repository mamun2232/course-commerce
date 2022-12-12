import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Utilites/Loading";
import { sendPasswordResetEmail } from "firebase/auth";
const Login = () => {
  const navigete = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, users, loading, errorss] =
    useSignInWithEmailAndPassword(auth);
  const [user, loadings, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    fetch("https://course-commerce-back-end.vercel.app/api/v1/user/login", {
      method: "POST",
      body: JSON.stringify({ email: data.email }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(async (result) => {
        console.log(data);
        if (result.success) {
          await signInWithEmailAndPassword(data.email, data.password);
          // toast.success(data.message);
          localStorage.setItem("Token", result?.token);
          localStorage.setItem("userId", result.user._id);
          // navigate("/login");
        } else {
          toast.error(result.message);
        }
      });
    console.log(data);
  };

  if (loading || loadings) {
    return <Loading />;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  let errorMessage;
  if (error || errorss) {
    errorMessage = error?.message || errorss?.message;
    // toast.error(errorMessage);
  }

  const passwordResetHendeler = () => {
    sendPasswordResetEmail(auth, email).then(() => {
      toast.success("Reset password send email");
      handleClose();
    });
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
                name="email"
                id="email"
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
                name="password"
                id="password"
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
                  value="Login"
                />
              </div>
              <p className="text-danger">{errorMessage}</p>
              <p
                onClick={() => handleShow()}
                className=" text-end text-primary mt-2 pinter"
              >
                Forgate Password?
              </p>
            </div>
          </div>
        </div>
      </form>

      <p className="text-center mt-2">
        <span
          onClick={() => navigete("/signUp")}
          className="text-primary pinter"
        >
          Create an Account
        </span>{" "}
      </p>

      <Modal show={show} onHide={handleClose}>
        <div className="p-3 ">
          <div className="mt-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="EmailInput"
              name="email"
              id="email"
              required
            />
          </div>

          <div className=" d-flex justify-content-center mt-2">
            <Button
              disabled={!email}
              // variant="secondary"
              className="btn btn-warning px-5 w-full"
              onClick={() => passwordResetHendeler()}
            >
              Reset Password
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
