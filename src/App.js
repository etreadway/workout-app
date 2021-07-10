import "./App.css";

import { Switch, Route } from "react-router-dom";

import HelloWorld from "./components/HelloWorld";
import Routine from "./components/Routine";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HelloWorld />
        </Route>
        <Route path="/routine">
          <Routine />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
