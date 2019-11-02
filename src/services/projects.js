const BASE_URL = "http://localhost:4000/projects";

export function getProjects({ page = 1, limit = 10, filters = [] } = {}) {
  const filterString = concatFilters(filters, "&");
  return fetch(
    `${BASE_URL}?_expand=user&_page=${page}&_limit=${limit}${filterString}`
  ).then(response => response.json());
}

export function getProjectsCount({ filters = [] }) {
  const filterString = concatFilters(filters, "?");
  return fetch(`${BASE_URL}${filterString}`)
    .then(response => response.json())
    .then(data => Promise.resolve(data.length));
}

function concatFilters(filters, wildcard) {
  const filterString = filters.map(filter => filter.join("=")).join("&");
  return filterString ? `${wildcard}${filterString}` : "";
}
