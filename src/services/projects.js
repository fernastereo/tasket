import http from "./../utils/http";

export function getProjects({ page = 1, limit = 10, filters = [] } = {}) {
  const filterString = concatFilters(filters, "&");
  return http
    .get(
      `/projects?_expand=user&_page=${page}&_limit=${limit}${filterString}&_sort=id&_order=desc`
    )
    .then(({ data }) => data);
}

export function getProjectsCount({ filters = [] }) {
  const filterString = concatFilters(filters, "?");
  return http.get(`/projects${filterString}`).then(({ data }) => data.length);
}

export function postProject({ name, description }) {
  const userId = 1;
  const id = Date.now();
  return http
    .post(`/projects`, { id, name, description, userId })
    .then(({ data }) => data);
}

export function deleteProject(id) {
  return http.delete(`/projects/${id}`).then(({ data }) => data);
}

function concatFilters(filters, wildcard) {
  const filterString = filters.map(filter => filter.join("=")).join("&");
  return filterString ? `${wildcard}${filterString}` : "";
}
