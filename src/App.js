import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./containers/NavBar";
//import Projects from "./pages/Projects";
//import Tasks from "./pages/Tasks";
import SignIn from "./pages/SignIn";
import "./App.css";

const Projects = lazy(() => import("./pages/Projects"));
const Tasks = lazy(() => import("./pages/Tasks"));

export default function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route
          path="/"
          exact
          render={() => {
            return (
              <Suspense fallback={<div>Loading...</div>}>
                <Projects />
              </Suspense>
            );
          }}
        />
        <Route
          path="/projects"
          render={() => {
            return (
              <Suspense fallback={<div>Loading...</div>}>
                <Projects />
              </Suspense>
            );
          }}
        />
        <Route
          path="/tasks"
          render={() => {
            return (
              <Suspense fallback={<div>Loading...</div>}>
                <Tasks />
              </Suspense>
            );
          }}
        />
        <Route path="/signin" component={SignIn} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}
