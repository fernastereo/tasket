import { getToken } from "./../utils/token";
const BASE_URL = "http://localhost:4000/users";

export function getUsers({ page = 1, itemPerPage = 10 } = {}) {
  const token = getToken();
  return fetch(`${BASE_URL}?_page=${page}&_limit=${itemPerPage}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(response => response.json());
}
