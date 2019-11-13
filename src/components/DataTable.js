import React from "react";
import _get from "lodash/get";

export default function DataTable(props) {
  const { columns = [], rows = [] } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map(column => (
            <th scope="col" key={column.key}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => {
          return (
            <tr key={row.id}>
              {columns.map(column => {
                return (
                  <td key={`${column.key}-${row.id}`}>
                    {column.path ? _get(row, column.path) : column.content(row)}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
