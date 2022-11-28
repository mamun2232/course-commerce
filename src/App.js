import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Home from "./components/Home/Home";
import Navber from "./components/Home/Navber";
import { Route, Routes } from "react-router-dom";
import CourseDetails from "./components/Home/CourseDetails";
import Login from "./components/Authorazation/Login";
import Register from "./components/Authorazation/Register";
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart/Cart";
import Chackout from "./components/Cart/Chackout";
import OrderReview from "./components/Cart/OrderReview";
import Payment from "./components/Cart/Payment";
import RequreAuth from "./components/Authorazation/RequreAuth";
import PaymentSuccess from "./components/Cart/PaymentSuccess";
import Courses from "./components/Courses/Courses";
import Dashboard from "./components/Dashboard/Dashboard";
import MyOrder from "./components/Dashboard/MyOrder";
import MyProfile from "./components/Dashboard/MyProfile";
import ManageOrder from "./components/Dashboard/ManageOrder";
import ManageOrderDetails from "./components/Dashboard/ManageOrderDetails";
import ManageCourse from "./components/Dashboard/ManageCourse";
import AddCourser from "./components/Dashboard/AddCourser";
import User from "./components/Dashboard/User";
import UpdateCourese from "./components/Dashboard/UpdateCourese";
function App() {
  return (
    <div className="">
      <Navber />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={<Courses />}></Route>
        <Route
          path="/course/details/:id"
          element={
            <RequreAuth>
              <CourseDetails />
            </RequreAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<Register />}></Route>
        <Route path="/myCart" element={<Cart />}></Route>
        <Route path="/myCart/chackout" element={<Chackout />}></Route>
        <Route path="/myCart/chackout/review" element={<OrderReview />}></Route>
        <Route
          path="/myCart/chackout/review/payment"
          element={<Payment />}
        ></Route>
        <Route
          path="/myCart/chackout/review/payment/success"
          element={<PaymentSuccess />}
        ></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MyOrder />} />
          <Route path="/dashboard/myProfile" element={<MyProfile />} />
          <Route path="/dashboard/manageOrder" element={<ManageOrder />} />
          <Route path="/dashboard/manageOrder/details/:id" element={<ManageOrderDetails />} />
          <Route path="/dashboard/manageCourse" element={<ManageCourse />} />
          <Route path="/dashboard/manageCourse/update/:id" element={<UpdateCourese />} />
          <Route path="/dashboard/addCourse" element={<AddCourser />} />
          <Route path="/dashboard/user" element={<User />} />
        </Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
