import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import WorkoutList from "./components/WorkoutList.jsx";

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src="https://i.ibb.co/C7Vt8Dw/Screen-Shot-2021-07-15-at-8-24-48-PM.png" className="App-logo" alt="logo" />
      <Switch>
        {/* <Navbarhead /> */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/routine/:id/:day">
          <WorkoutList />
        </Route>
      </Switch>
      </header>
    </div>

    
  );
}

export default App;
