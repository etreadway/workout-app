import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import WorkoutList from "./components/workout-section-page/WorkoutList.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/routine/:id/:day">
          <WorkoutList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
