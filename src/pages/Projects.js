import React, { Component } from "react";
import ProjectTable from "./../containers/ProjectTable";
import ProjectForm from "./../containers/ProjectForm";
import ListGroup from "./../components/ListGroup";
import { getUsers } from "./../services/users";
import { postProject } from "./../services/projects";
import Modal from "./../components/Modal";

export default class Projects extends Component {
  state = {
    users: [],
    userId: undefined,
    filters: [],
    showForm: false,
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

  toggleForm = () => {
    const { showForm } = this.state;
    this.setState({ showForm: !showForm });
  };

  createProject = project => {
    postProject(project).then(data => {
      this.toggleForm();
      this.setState({ filters: [] });
    });
  };

  _makeFilters = () => {
    const { userId } = this.state;
    const byUserId = userId ? ["userId", userId] : [];

    return [byUserId];
  };

  render() {
    const { users, userId, filters, showForm } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.toggleForm}
              >
                Agregar
              </button>
            </p>
            {showForm ? (
              <Modal title="hola" onClose={this.toggleForm}>
                <ProjectForm onSubmit={this.createProject} />
              </Modal>
            ) : null}
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
