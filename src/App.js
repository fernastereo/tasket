import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./containers/NavBar";
//import Projects from "./pages/Projects";
//import Tasks from "./pages/Tasks";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import userContext from "./containers/UserContext";
import "./App.css";
import ProtectedRoute from "./containers/ProtectedRoute";

const Projects = lazy(() => import("./pages/Projects"));
const Tasks = lazy(() => import("./pages/Tasks"));

export default class App extends React.Component {
  state = {
    user: {
      email: undefined,
    },
  };

  setUser = user => {
    this.setState({ user });
  };

  clearUser = () => {
    this.setState({ user: { email: undefined } });
  };

  render() {
    const { user } = this.state;
    return (
      <userContext.Provider
        value={{ user, setUser: this.setUser, clearUser: this.clearUser }}
      >
        <NavBar />
        <Switch>
          <ProtectedRoute path="/" exact={true} component={Projects} />
          <ProtectedRoute path="/projects" component={Projects} />
          <ProtectedRoute path="/tasks" component={Tasks} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signout" component={SignOut} />
          <Redirect to="/" />
        </Switch>
      </userContext.Provider>
    );
  }
}
