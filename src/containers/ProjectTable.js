import React, { Component } from "react";
import DataTable from "./../components/DataTable";

export default class ProjectTable extends Component {
  state = {
    columns: [
      { key: "name", label: "Nombre" },
      { key: "description", label: "Descripción" },
    ],
    rows: [],
  };

  render() {
    const { columns, rows } = this.state;
    return <DataTable columns={columns} rows={rows} />;
  }
}
