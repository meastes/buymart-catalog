// eslint-disable-next-line import/prefer-default-export
export async function getAllUsStates() {
  return fetch('http://localhost:3001/api/states').then(response => response.json());
}
