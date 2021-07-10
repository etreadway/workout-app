import React from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Form } from 'react-bootstrap';
import './Workoutpage.CSS';

function WorkoutList() {
    return (
    <center> 
      <div style={{width: '32rem', justifyContent: "center", marginTop: '2rem'}}> 
{/* <h1 className="workCard"> HEY! </h1> */}
<Card style={{width: '32rem', textAlign: 'center'}}>
  <Card.Header> Exercise Name </Card.Header>
  <Card.Body>

    <Card.Title>
    <Form>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>How much weight do you want?</Form.Label>
    <Form.Control as="select">
      <option>125 lbs</option>
    </Form.Control>
  </Form.Group>
<br/>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>How many reps do you want?</Form.Label>
    <Form.Control as="select">
      <option>5</option>
    </Form.Control>
  </Form.Group>
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