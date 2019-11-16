import { Component } from "react";
import userContext from "./../containers/UserContext";

export default class SignOut extends Component {
  static contextType = userContext;

  componentDidMount() {
    this.context.clearUser();
    this.props.history.push("/");
  }

  render() {
    return null;
  }
}
