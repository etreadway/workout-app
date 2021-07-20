import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';
import './Workoutpage.CSS';
import { useParams } from 'react-router-dom'
import Exercise from './Exercise'

function WorkoutList() {

  const [thisDay, setThisDay] = useState([])
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
  // console.log(dayData);

  let exerciseObj = Object.values(dayData)[0]
  console.log(exerciseObj);
  let exerciseArr = Object.entries(exerciseObj)
  console.log(exerciseArr);
  let dayName = Object.keys(dayData)[0]

  useEffect(() => {
    setThisDay(exerciseArr)
  }, {})

  console.log(thisDay);
  // thisDay.map((exercise, index) => {
  //   console.log(exercise);
  // });


  // console.log(allowed);

  // console.log(data[0].days);

  return (
    <center>

      <h1 className="workCard"> {dayName} </h1>
      {thisDay.map((exercise, index) => {
        return(
          <Exercise 
            key={index}
            id={index}
            exercise={exercise}
          />
        )
      })}
      
    </center>
  );
}

export default WorkoutList


