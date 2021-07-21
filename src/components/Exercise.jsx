import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';
import _ from 'lodash'

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
        <div style={{ width: '40rem', justifyContent: "center", marginTop: '2rem' }}>
            <Card style={{ width: '40rem', textAlign: 'center' }}>
                <Card.Header> {props.exercise[0]} </Card.Header>
                <Card.Body>
                    {_.times(count, (index) => {
                        return (
                            <div key={index} className='set'>
                                <h1 className='set-number'> Set {index + 1} </h1>
                                <Card.Title>
                                    <Form>

                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                                        <Form.Label>Weight</Form.Label>
                                                        <Form.Control as="select">
                                                            <option>{props.exercise[1][1]} lbs</option>
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
                                                            <option>{props.exercise[1][0]}</option>
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

                            </div>
                        );
                    })}
                    <div className='set-buttons'>
                    <Button variant="primary" onClick={increase} className='add-set'>Add Set</Button>
                    <Button variant="primary" onClick={decrease} className='remove-set'>Remove Set</Button>
                    </div>
                </Card.Body>
                <br />
            </Card>
        </div>
    )
}

export default Exercise