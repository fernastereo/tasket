const BASE_URL = "http://localhost:4000/projects";

export function getProjects({ page = 1, limit = 10, filters = [] } = {}) {
  const filterString = concatFilters(filters, "&");
  return fetch(
    `${BASE_URL}?_expand=user&_page=${page}&_limit=${limit}${filterString}&_sort=id&_order=desc`
  ).then(response => response.json());
}

export function getProjectsCount({ filters = [] }) {
  const filterString = concatFilters(filters, "?");
  return fetch(`${BASE_URL}${filterString}`)
    .then(response => response.json())
    .then(data => Promise.resolve(data.length));
}

export function postProject({ name, description }) {
  const userId = 1;
  const id = Date.now();
  return fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, name, description, userId }),
  }).then(response => response.json());
}

function concatFilters(filters, wildcard) {
  const filterString = filters.map(filter => filter.join("=")).join("&");
  return filterString ? `${wildcard}${filterString}` : "";
}
