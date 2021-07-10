import "./App.css";

import { Switch, Route } from "react-router-dom";

import HelloWorld from "./components/HelloWorld";
import Routine from "./components/Routine";
import WorkoutList from './components/workout-section-page/WorkoutList.jsx';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HelloWorld />
        </Route>
        <Route path="/routine">
          <WorkoutList />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
