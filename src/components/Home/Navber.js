import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { Modal } from "react-bootstrap";
const Navber = () => {
  const [privacyshow, setPrivacyShow] = useState(false);

  const privacyhandleClose = () => setPrivacyShow(false);
  const privacyhandleShow = () => setPrivacyShow(true);
  const [termsshow, setTermsShow] = useState(false);

  const termshandleClose = () => setTermsShow(false);
  const termshandleShow = () => setTermsShow(true);

  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const [user] = useAuthState(auth);

  return (
    <div className="bg-light " sticky="top">
      <Navbar className="px-5 sm:px-2" expand="lg">
        <Container fluid>
          {/* <Navbar.Brand href="#">Home</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/course">Courses</Nav.Link>
              {user && <Nav.Link href="/dashboard">Dashbaord</Nav.Link>}

              <Nav.Link href="/contact">Contact</Nav.Link>
              <span
                onClick={privacyhandleShow}
                className="mt-2 text-secondary pinter px-2"
              >
                Privacy Policy
              </span>
              <span
                onClick={termshandleShow}
                className="mt-2 text-secondary pinter px-2"
              >
                Terms and Condation
              </span>
            </Nav>
            <div className="d-flex gap-3">
              <span onClick={() => navigate("/myCart")} className="myCart">
                <AiOutlineShoppingCart />
              </span>
              <span className="cartlength">{cart?.length}</span>

              {user ? (
                <Button onClick={() => signOut(auth)} variant="outline-success">
                  LogOut
                </Button>
              ) : (
                <Button
                  onClick={() => navigate("/signUp")}
                  variant="outline-success"
                >
                  Sing Up
                </Button>
              )}

              <Button
                onClick={() => navigate("/login")}
                variant="outline-success"
              >
                Login
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={privacyshow} onHide={privacyhandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quia
          natus in id nobis asperiores accusantium, consequuntur quae sint
          veniam nostrum assumenda necessitatibus mollitia aperiam cumque beatae
          explicabo, voluptas adipisci. Dolores ducimus quas eligendi. Animi
          reiciendis nesciunt saepe perspiciatis sunt possimus sint enim tenetur
          eius vel aspernatur nostrum maxime voluptatem doloribus distinctio
          obcaecati, delectus aliquam cupiditate libero consectetur qui! Maxime
          reprehenderit suscipit velit, fugit aperiam nemo enim mollitia veniam
          voluptates, vero molestias placeat ipsum nesciunt tempore id
          aspernatur amet qui ut earum dolore quidem ad obcaecati eius esse.
          Maxime nostrum sit corrupti cupiditate. Doloribus facilis, aperiam
          iure excepturi architecto magnam.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={privacyhandleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={privacyhandleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={termsshow} onHide={termshandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Terms And Condation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quia
          natus in id nobis asperiores accusantium, consequuntur quae sint
          veniam nostrum assumenda necessitatibus mollitia aperiam cumque beatae
          explicabo, voluptas adipisci. Dolores ducimus quas eligendi. Animi
          reiciendis nesciunt saepe perspiciatis sunt possimus sint enim tenetur
          eius vel aspernatur nostrum maxime voluptatem doloribus distinctio
          obcaecati, delectus aliquam cupiditate libero consectetur qui! Maxime
          reprehenderit suscipit velit, fugit aperiam nemo enim mollitia veniam
          voluptates, vero molestias placeat ipsum nesciunt tempore id
          aspernatur amet qui ut earum dolore quidem ad obcaecati eius esse.
          Maxime nostrum sit corrupti cupiditate. Doloribus facilis, aperiam
          iure excepturi architecto magnam.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={termshandleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={termshandleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Navber;
