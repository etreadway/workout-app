import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Workout from "./Workout";
import '../App.css';


function Home() {
  const url = process.env.REACT_APP_URL || "http://localhost:3005/routines";

  const [loader, setLoader] = useState(false);
  const [routines, setRoutines] = useState([
    {
      title: "",
      days: {},
      description: "",
    },
  ]);

  useEffect(() => {
    setLoader(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRoutines(data));
    setTimeout(() => {
      setLoader(false);
    }, 2500);
  }, []);

  console.log(routines);

  return (
    <div>
      <h1 className="Title1"> The Work Out List App</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis
        facilisis mauris, in tempor dolor laoreet vel. Nulla elit velit,
        placerat sit amet lectus quis, pellentesque eleifend leo. Donec massa
        leo, venenatis nec mi sed, pretium tempor sapien. Donec ante orci,
        commodo sed ex nec, condimentum gravida tortor. Praesent vestibulum ante
        ut justo hendrerit, sit amet finibus tellus placerat
      </p>
      {!!routines !== [] ? (
        !!loader === true ? (
          <Loader />
        ) : (
          routines.map((thisRoutine, index) => {
            return (
              <Workout
                key={index}
                title={thisRoutine.title}
                days={thisRoutine.days}
                description={thisRoutine.description}
              />
            );
          })
        )
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Home;
