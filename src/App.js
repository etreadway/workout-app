import { Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import WorkoutList from "./components/workout-section-page/WorkoutList.jsx";

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src="https://i.ibb.co/C7Vt8Dw/Screen-Shot-2021-07-15-at-8-24-48-PM.png" className="App-logo" alt="logo" />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/routine">
          <WorkoutList />
        </Route>
      </Switch>
      </header>
    </div>

    
  );
}

export default App;
