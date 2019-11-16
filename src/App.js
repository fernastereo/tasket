import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./containers/NavBar";
//import Projects from "./pages/Projects";
//import Tasks from "./pages/Tasks";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import { UserProvider } from "./containers/UserContext";
import "./App.css";
import ProtectedRoute from "./containers/ProtectedRoute";

const Projects = lazy(() => import("./pages/Projects"));
const Tasks = lazy(() => import("./pages/Tasks"));

export default function App() {
  return (
    <UserProvider>
      <NavBar />
      <Switch>
        <ProtectedRoute path="/" exact={true} component={Projects} />
        <ProtectedRoute path="/projects" component={Projects} />
        <ProtectedRoute path="/tasks" component={Tasks} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={SignOut} />
        <Redirect to="/" />
      </Switch>
    </UserProvider>
  );
}
