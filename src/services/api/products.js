// eslint-disable-next-line import/prefer-default-export
export async function getAllProducts() {
  return fetch('http://localhost:3001/api/products').then(response => response.json());
}
