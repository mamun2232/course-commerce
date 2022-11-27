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
function App() {
  return (
    <div className="">
      <Navber />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={<Courses />}></Route>
        <Route path="/course/details/:id" element={ <RequreAuth>
          <CourseDetails />
        </RequreAuth>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<Register />}></Route>
        <Route path="/myCart" element={<Cart />}></Route>
        <Route path="/myCart/chackout" element={<Chackout />}></Route>
        <Route path="/myCart/chackout/review" element={<OrderReview/>}></Route>
        <Route path="/myCart/chackout/review/payment" element={<Payment/>}></Route>
        <Route path="/myCart/chackout/review/payment/success" element={<PaymentSuccess/>}></Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
