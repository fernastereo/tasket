import React from "react";

export default function Pagination(props) {
  const { total, current, onSelect } = props;
  const pages = [...Array(total).keys(), total].slice(1);
  const prevPage = Math.max(current - 1, 1);
  const nextPage = Math.min(current + 1, total);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <span
            className="page-link"
            aria-label="Previous"
            onClick={() => onSelect(prevPage)}
          >
            <span aria-hidden="true">&laquo;</span>
          </span>
        </li>
        {pages.map(page => {
          return (
            <li
              className={`page-item ${page === current ? "active" : ""}`}
              key={page}
            >
              <span className="page-link" onClick={() => onSelect(page)}>
                {page}
              </span>
            </li>
          );
        })}
        <li className="page-item">
          <span
            className="page-link"
            aria-label="Next"
            onClick={() => onSelect(nextPage)}
          >
            <span aria-hidden="true">&raquo;</span>
          </span>
        </li>
      </ul>
    </nav>
  );
}
