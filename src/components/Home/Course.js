import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCourse } from "../Redux/Slice/proudctSlice";
import Loading from "../Utilites/Loading";

const Course = () => {
  const navigate = useNavigate();
  const courses = useSelector((state) => state.courses);

  const disPatch = useDispatch();
  useEffect(() => {
    // setshart(true);
    disPatch(fetchCourse());
  }, []);

  console.log(courses);
  return (
    <div className="my-5">
      <div className="cardTop"></div>
      <div className="container mt-5">
        <div className="card-section">
          <div className="car">
            <div className="row">
              <div className="cards">
                {courses.loading && (
                  <div className=" flex  justify-end">
                    <Loading></Loading>
                  </div>
                )}
                {!courses.loading && courses.error ? (
                  <p>{courses.error}</p>
                ) : (
                  ""
                )}
                {!courses.loading && !courses.error ? (
                  <>
                    {courses?.courses?.course?.map((courses) => (
                      // <courses key={courses._id} courses={courses}></courses>
                      <Card key={courses._id}>
                        <Card.Img variant="top" src={courses.images[0]} />
                        <Card.Body>
                          <Card.Title>{courses.name}</Card.Title>
                          <h2 className="">{courses.price}</h2>
                          <Card.Text>{courses.courseTitle}</Card.Text>
                          <Button
                            onClick={() => navigate(`/course/details/${courses._id}`)}
                            variant="warning"
                          >
                            Purches
                          </Button>
                        </Card.Body>
                      </Card>
                    ))}
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
