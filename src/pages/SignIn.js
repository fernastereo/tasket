import React, { Component } from "react";
import { signIn } from "./../services/auth";
import { setToken } from "./../utils/token";
import userContext from "./../containers/UserContext";

export default class SignIn extends Component {
  static contextType = userContext;

  handleSubmit = event => {
    event.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = event.target.elements;

    signIn({ email, password }).then(data => {
      const { token = "" } = data;
      setToken(token);
      this.context.setUser({ email });
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit} method="POST" action="">
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
