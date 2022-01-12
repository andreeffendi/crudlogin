import React from "react";
import "./App.css";
import Login from "./components/Login";
import Home from "./pages/Home"
import { Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import About from "./components/About";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/register" component={Register} />
        <Route />
      </Switch>
    </div>
  );
}

export default App;
