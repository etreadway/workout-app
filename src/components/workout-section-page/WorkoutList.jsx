import React from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';
import './Workoutpage.CSS';

function WorkoutList() {
    return (
    <center> 
      <div style={{width: '32rem', justifyContent: "center", marginTop: '2rem'}}> 
{/* <h1 className="workCard"> HEY! </h1> */}
<Card style={{width: '32rem', textAlign: 'center'}}>
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
<br/>
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
<br/>
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
<br/>
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
<br/>
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
<br/>
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
<br/>
<Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <br/>
</Card>
      </div>
      </center> 
    );
  }

export default WorkoutList

