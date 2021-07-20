import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';
import './Workoutpage.CSS';

function Sets(props) {
    return (
        <div>
            <h1> Set 1 </h1>
            <Card.Title>
                <Form>

                    <Container>
                        <Row>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Weight</Form.Label>
                                    <Form.Control as="select">
                                        {/* <option>{props.exercise[1][1]} lbs</option> */}
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
                                        {/* <option>{props.exercise[1][0]}</option> */}
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
        </div>
    )
}

export default Sets