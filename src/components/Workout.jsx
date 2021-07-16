import React, { useEffect, useState } from "react";

function Workout({ data }) {
  const [isClicked, setIsClicked] = useState(false);
  const [workout, setWorkout] = useState([{ title: "" }]);

  useEffect(() => {
    if (data !== undefined) {
      setWorkout(data);
    }
  }, []);

  function handleClick() {
    setIsClicked(true);
  }
  console.log("WORKOUT STATE", workout);

  return (
    <div className="workout" onClick={handleClick}>
      <h3>{workout[0].title}</h3>
      <p>
        Aenean at tempor ligula. Aliquam justo ligula, viverra sit amet
        vestibulum id, commodo quis nunc. Proin in velit vel ex dignissim
        pretium at pellentesque dolor. Mauris porta metus vitae finibus
        tincidunt. Curabitur eleifend diam sit amet ex rutrum elementum nec in
        turpis. Quisque fringilla sem ullamcorper feugiat posuere. Nulla mollis
        odio a augue rhoncus, ac porta nisl cursus.
      </p>
      <ul className={`workout-items ${isClicked ? "expand" : ""}`}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}

export default Workout;
