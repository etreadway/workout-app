import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';
import './Workoutpage.CSS';
import _ from 'lodash'
import { useEffect } from 'react';

function Exercise(props) {

    const [count, setCount] = useState(5)

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }




    console.log(props.exercise[1][0]);

    return (
        <div style={{ width: '32rem', justifyContent: "center", marginTop: '2rem' }}>
            <Card style={{ width: '32rem', textAlign: 'center' }}>
                <Card.Header> {props.exercise[0]} </Card.Header>
                <Card.Body>
                    {_.times(count, (index) => {
                        return (
                            <div>
                                <h1> Set {index + 1} </h1>
                                <Card.Title>
                                    <Form>

                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                                        <Form.Label>Weight</Form.Label>
                                                        <Form.Control as="text">
                                                            {/* <option>{props.exercise[1][1]} lbs</option> */}
                                                            {/* <Form.Label>Email address</Form.Label> */}
                                                            <Form.Control type="text" placeholder= {props.exercise[1][1] +" lbs"} />


                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>
                                                <br />
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                                        <Form.Label>Reps</Form.Label>
                                                        <Form.Control as="text">
                                                            {/* <option>{props.exercise[1][0]}</option> */}
                                                            <Form.Control type="text" placeholder={props.exercise[1][0]} />


                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Container>

                                    </Form>
                                </Card.Title>
                                <br />

                            </div>
                        );
                    })}
                    <Button variant="primary" onClick={increase}>Add Set</Button>
                    <Button variant="primary" onClick={decrease}>Remove Set</Button>
                </Card.Body>
                <br />
            </Card>
        </div>
    )
}

export default Exercise