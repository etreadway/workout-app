import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';
import './Workoutpage.CSS';
import { useParams } from 'react-router-dom'

function WorkoutList() {

  const [thisDay, setThisDay] = useState({})
  const { id, day } = useParams();

  // search local storage for routine with id and day store in variable

  const routines = JSON.parse(localStorage.getItem('routines'))
  // console.log(routines);

  const selectedDay = routines.filter(obj => {
    return obj._id === id
  });

  // console.log(routines[0].days);
  // console.log(id);
  // console.log(day);

  let allowed = [day]

  let dayData = Object.keys(selectedDay[0].days)
    .filter(key => allowed.includes(key))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: selectedDay[0].days[key]
      }
    }, {})
  console.log(dayData);

  useEffect(() => {
    setThisDay(dayData)
  }, {})

  console.log(thisDay);

  // console.log(allowed);

  // console.log(data[0].days);

  return (
    <center>
      <div style={{ width: '32rem', justifyContent: "center", marginTop: '2rem' }}>
        <h1 className="workCard"> {Object.keys(thisDay)[0]} </h1>
        <Card style={{ width: '32rem', textAlign: 'center' }}>
          <Card.Header> Exercise Name </Card.Header>
          <Card.Body>



            <h1> Set 1 </h1>
            <Card.Title>
              <Form>

                <Container>
                  <Row>
                    <Col>


                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control as="select">
                          <option>125 lbs</option>
                          <option>125 lbs</option>
                          <option>125 lbs</option>
                          <option>125 lbs</option>
                          <option>125 lbs</option>


                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <br />
                    <Col>
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Reps</Form.Label>
                        <Form.Control as="select">
                          <option>5</option>
                          <option>4</option>
                          <option>3</option>
                          <option>2</option>
                          <option>1</option>
                          <option>0</option>

                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </Container>

              </Form>
            </Card.Title>
            <br />
            <h1> Set 2 </h1>
            <Card.Title>
              <Form>

                <Container>
                  <Row>
                    <Col>


                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control as="select">
                          <option>125 lbs</option>
                          <option>125 lbs</option>
                          <option>125 lbs</option>
                          <option>125 lbs</option>
                          <option>125 lbs</option>


                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <br />
                    <Col>
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Reps</Form.Label>
                        <Form.Control as="select">
                          <option>5</option>
                          <option>4</option>
                          <option>3</option>
                          <option>2</option>
                          <option>1</option>
                          <option>0</option>

                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </Container>

              </Form>
            </Card.Title>
            <br />
            <h1> Set 3 </h1>
            <Card.Title>
              <Form>

                <Container>
                  <Row>
                    <Col>


                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control as="select">
                          <option>125 lbs</option>
                          <option>125 lbs</option>
                          <option>125 lbs</option>
                          <option>125 lbs</option>
                          <option>125 lbs</option>


                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <br />
                    <Col>
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Reps</Form.Label>
                        <Form.Control as="select">
                          <option>5</option>
                          <option>4</option>
                          <option>3</option>
                          <option>2</option>
                          <option>1</option>
                          <option>0</option>

                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </Container>

              </Form>
            </Card.Title>
            <br />
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <br />
        </Card>
      </div>
    </center>
  );
}

export default WorkoutList


