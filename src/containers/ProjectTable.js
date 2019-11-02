import React, { Component } from "react";
import DataTable from "./../components/DataTable";
import Pagination from "../components/Pagination";
import { getProjects, getProjectsCount } from "./../services/projects";

export default class ProjectTable extends Component {
  state = {
    columns: [
      { key: "name", label: "Nombre" },
      { key: "description", label: "Descripción" },
      { key: "user", label: "Usuario", path: "user.name" },
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
