import React from "react"; 
// import "bootstrap/dist/css/bootstrap. min. css"; 
import { Card } from "react-bootstrap";
import { Button} from 'react-bootstrap';



function WorkoutList() {
    return (
      <div> 
<Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      </div>
    );
  }

export default WorkoutList