import React from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import './Workoutpage.CSS';

function WorkoutList() {
    return (
    <center> 
      <div style={{width: '32rem', justifyContent: "center", marginTop: '2rem'}}> 
{/* <h1 className="workCard"> HEY! </h1> */}
<Card style={{width: '32rem', textAlign: 'center'}}>
  <Card.Header> Exercise Name </Card.Header>
  <Card.Body>
    <Card.Title>weight 125lbs</Card.Title>
    <Card.Text> (Number of reps) </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      </div>
      </center> 
    );
  }

export default WorkoutList