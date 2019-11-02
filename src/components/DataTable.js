import React from "react";

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
        {rows.map((row, index) => {
          return (
            <tr key={index}>
              {columns.map((column, rowIndex) => {
                return (
                  <td key={`${column.key}-${rowIndex}`}>{row[column.key]}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
