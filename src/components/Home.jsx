import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Workout from "./Workout";

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
      <h1>Workout App</h1>
     
      <h4>Welcome to The Personal Workout Assistant! </h4>

      <h4> Go ahead and start customizing your routine.</h4>

      <h4>Click a the card and choose a workout day to get stated.</h4>

    
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
