export const BASE_URL = 'https://bloggy-api.herokuapp.com';

export async function request(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }
  const result = await response.json();
  return result;
}
