import http from "./../utils/http";

export function getUsers({ page = 1, itemPerPage = 10 } = {}) {
  return http
    .get(`/users?_page=${page}&_limit=${itemPerPage}`)
    .then(({ data }) => data);
}
