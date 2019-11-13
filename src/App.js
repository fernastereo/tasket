import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import "./App.css";

export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={Projects} />
      <Route path="/projects" component={Projects} />
      <Route path="/tasks" component={Tasks} />
      <Redirect to="/" />
    </Switch>
  );
}
