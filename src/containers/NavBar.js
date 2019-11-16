import React from "react";
import { NavLink } from "react-router-dom";
import userContext from "./UserContext";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Tasket
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <NavLink to="/projects" className="nav-item">
            <span className="nav-link">Projects</span>
          </NavLink>
          <NavLink to="/tasks" className="nav-item">
            <span className="nav-link">Tasks</span>
          </NavLink>
        </ul>
        <ul className="navbar-nav">
          <userContext.Consumer>
            {context => {
              const { user: { email = "" } = {} } = context;
              return email ? (
                <NavLink to="/profile" className="nav-item">
                  <span className="nav-link">{email}</span>
                </NavLink>
              ) : (
                <NavLink to="/signin" className="nav-item">
                  <span className="nav-link">Ingresar</span>
                </NavLink>
              );
            }}
          </userContext.Consumer>
        </ul>
      </div>
    </nav>
  );
}
