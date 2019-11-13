import React, { PureComponent } from "react";
import DataTable from "./../components/DataTable";
import Pagination from "../components/Pagination";
import {
  getProjects,
  getProjectsCount,
  deleteProject,
} from "./../services/projects";

export default class ProjectTable extends PureComponent {
  state = {
    columns: [
      { key: "name", label: "Nombre", path: "name" },
      { key: "description", label: "Descripción", path: "description" },
      { key: "user", label: "Usuario", path: "user.name" },
      {
        key: "delete",
        label: "Eliminar",
        content: project => {
          return (
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => this.removeProject(project.id)}
            >
              Eliminar
            </button>
          );
        },
      },
    ],
    rows: [],
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: 2,
  };

  static getDerivedStateFromProps(props, state) {
    const { filters } = props;

    return {
      ...state,
      filters,
    };
  }

  componentDidMount() {
    this._loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    const { filters } = this.state;
    let { currentPage } = this.state;
    if (
      prevState.currentPage !== currentPage ||
      prevState.filters !== filters
    ) {
      if (prevState.filters !== filters) {
        currentPage = 1;
      }
      this._loadData(currentPage);
    }
  }

  changePage = page => {
    this.setState({
      currentPage: page,
    });
  };

  removeProject = id => {
    deleteProject(id).then(() => {
      this._loadData();
    });
  };

  _loadData(currentPage = 1) {
    const { filters, itemsPerPage } = this.state;
    Promise.all([
      getProjects({ page: currentPage, limit: itemsPerPage, filters }),
      getProjectsCount({ filters }),
    ]).then(([data, count]) => {
      this.setState({
        rows: data,
        currentPage,
        totalPages: Math.ceil(count / itemsPerPage),
      });
    });
  }

  render() {
    const { columns, rows, currentPage, totalPages } = this.state;
    return (
      <>
        <DataTable columns={columns} rows={rows} />
        <Pagination
          total={totalPages}
          current={currentPage}
          onSelect={this.changePage}
        />
      </>
    );
  }
}
