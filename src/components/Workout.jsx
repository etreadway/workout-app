import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function Workout(props) {

    const [isClicked, setIsClicked] = useState(false)
    // const [workout, setWorkout] = useState([{}])

    // useEffect(() => {
    //     if (data !== undefined) {
    //         setWorkout(data)
    //     }
    // }, [])

    function handleClick() {
        setIsClicked(true);
    };

    // if (workout[0].days !== undefined){
    //     console.log(Object.keys(workout[0].days)[0])
    // }

    // console.log(props.title);

    // console.log(props.days);

    const workoutDays = Object.keys(props.days)

    // console.log(workoutDays);

    return (
        <div className="workout" onClick={handleClick}>
            <Card.Header>
                <h3>{props.title}</h3>
            </Card.Header>
            <p>{props.description}</p>
            <ul className={`workout-items ${isClicked ? "expand" : ""}`}>
                {workoutDays.map((item, index) => {
                    return (
                        <li className='exercise-link' key={index}><Link to={`/routine/${props.id}/${item}`}>{item}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}



// <div className="workout" onClick={handleClick}>
{/* <h3>Title</h3>
<p>Aenean at tempor ligula. Aliquam justo ligula, viverra sit amet vestibulum id, commodo quis nunc. Proin in velit vel ex dignissim pretium at pellentesque dolor. Mauris porta metus vitae finibus tincidunt. Curabitur eleifend diam sit amet ex rutrum elementum nec in turpis. Quisque fringilla sem ullamcorper feugiat posuere. Nulla mollis odio a augue rhoncus, ac porta nisl cursus.</p>
<ul className={`workout-items ${isClicked ? "expand" : ""}`}>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
//     {`workout-items ${isClicked ? "expand" : ""}
// </ul>
// </div> */}

export default Workout;