const BASE_URL = "http://localhost:4000";

export function signIn({ email, password }) {
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(response => response.json());
}
