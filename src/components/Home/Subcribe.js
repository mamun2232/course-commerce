import React from "react";
import { Button, Form } from "react-bootstrap";

const Subcribe = () => {
  return (
    <div className="my-5">
      <div className="container">
        <div className="bg-info rounded subcribe">
          <div className="p-5 text-center">
            <h2>Stay informed</h2>
            <p>Get updates, special offers and more</p>
            <Form>
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Button className="mt-3" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subcribe;
