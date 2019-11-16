import React, { Component, createContext } from "react";

const userContext = createContext();

export class UserProvider extends Component {
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
        {this.props.children}
      </userContext.Provider>
    );
  }
}

export default userContext;
