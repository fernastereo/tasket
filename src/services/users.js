const BASE_URL = "http://localhost:4000/users";

export function getUsers({ page = 1, itemPerPage = 10 } = {}) {
  return fetch(`${BASE_URL}?_page=${page}&_limit=${itemPerPage}`).then(
    response => response.json()
  );
}
