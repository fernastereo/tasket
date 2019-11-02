import React, { Component } from "react";
import ProjectTable from "./containers/ProjectTable";
import ListGroup from "./components/ListGroup";
import { getUsers } from "./services/users";

export default class App extends Component {
  state = {
    users: [],
    userId: undefined,
    filters: [],
  };

  componentDidMount() {
    getUsers().then(data => {
      this.setState({
        users: data,
      });
    });
  }

  selectUser = userId => {
    this.setState(
      {
        userId,
      },
      () => {
        this.setState({
          filters: this._makeFilters(),
        });
      }
    );
  };

  _makeFilters = () => {
    const { userId } = this.state;
    const byUserId = userId ? ["userId", userId] : [];

    return [byUserId];
  };

  render() {
    const { users, userId, filters } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <ProjectTable filters={filters} />
          </div>
          <div className="col-lg-4">
            <ListGroup
              items={users}
              itemKey="id"
              itemLabel="name"
              selected={userId}
              onSelect={this.selectUser}
            />
          </div>
        </div>
      </div>
    );
  }
}
