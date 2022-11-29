import React from "react";
import { Carousel } from "react-bootstrap";

const Description = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <div  className="h-50">
              {/* <img
                className="img-fluid rounded"
                src="https://polite-bubblegum-8fcb31.netlify.app/caro/junior%20golf%20foursome%20(2).jpg"
                alt=""
              /> */}
              <Carousel slide={false}>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carouselImg"
                    src="https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?b=1&s=170667a&w=0&k=20&c=1oQ2rt0FfJFhOcOgJ8hoaXA5gY4225BA4RdOP1RRBz4="
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carouselImg"
                    src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carouselImg"
                    src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div>
              <h2>Giving Back</h2>
              <p>
                At Michigan’s Best Golf Deals, we believe in giving back to our
                local communities. That’s why five dollars from every
                subscription go to Junior golf and five dollars goes to the
                Michigan soldier and sailor relief fund.
              </p>
            </div>
            <div className="mt-4">
              <h2>Referral Fee and Fundraising</h2>
              <p>
                In addition to the above mentioned organizations that we
                support, we also want to reward our loyal customers and
                fundraising partners. For every referral we receive we are happy
                to pay a ten dollar referral fee to the person named by the new
                subscriber at the time they sign up. (There is a prompt that
                asks the new subscriber if they were referred by anyone.)
              </p>
              <p className="mt-4">
                We are also happy to join with other local organizations such as
                the VFW and the American Legion by paying them the same ten
                dollar fee for each referral. Both programs require the new
                subscriber to list the referring person or organization’s email
                address. So make sure that they identify you so we know who to
                pay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
