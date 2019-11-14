import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./containers/NavBar";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import SignIn from "./pages/SignIn";
import "./App.css";

export default function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Projects} />
        <Route path="/projects" component={Projects} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/signin" component={SignIn} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}
