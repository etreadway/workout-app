import React from "react";
import Workout from "./Workout"

function Home() {
  return (
    <div>
      <h1>Workout App</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis facilisis mauris, in tempor dolor laoreet vel. Nulla elit velit, placerat sit amet lectus quis, pellentesque eleifend leo. Donec massa leo, venenatis nec mi sed, pretium tempor sapien. Donec ante orci, commodo sed ex nec, condimentum gravida tortor. Praesent vestibulum ante ut justo hendrerit, sit amet finibus tellus placerat</p>
      <Workout />
    </div>
  );
}

export default Home;