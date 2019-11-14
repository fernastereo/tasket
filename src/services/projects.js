import { getToken } from "./../utils/token";

const BASE_URL = "http://localhost:4000/projects";

export function getProjects({ page = 1, limit = 10, filters = [] } = {}) {
  const filterString = concatFilters(filters, "&");
  const token = getToken();

  return fetch(
    `${BASE_URL}?_expand=user&_page=${page}&_limit=${limit}${filterString}&_sort=id&_order=desc`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then(response => response.json());
}

export function getProjectsCount({ filters = [] }) {
  const filterString = concatFilters(filters, "?");
  const token = getToken();
  return fetch(`${BASE_URL}${filterString}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => response.json())
    .then(data => Promise.resolve(data.length));
}

export function postProject({ name, description }) {
  const userId = 1;
  const id = Date.now();
  const token = getToken();
  return fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id, name, description, userId }),
  }).then(response => response.json());
}

export function deleteProject(id) {
  const token = getToken();
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(response => response.json());
}

function concatFilters(filters, wildcard) {
  const filterString = filters.map(filter => filter.join("=")).join("&");
  return filterString ? `${wildcard}${filterString}` : "";
}
