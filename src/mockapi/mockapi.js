import axios from 'axios';

const BASE_URL = 'https://63b422609f50390584a7ae76.mockapi.io/contacts/';
const RESPONSE_OK = 200;
const CREATED_OK = 201;

// const searchParams = {
//   key: '30410400-df54a4fa47e0d802e49478434',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: 'true',
//   per_page: 12,
// };

export async function fetchContacts() {
  const response = await axios.get(BASE_URL);
  if (response.status !== RESPONSE_OK) {
    throw new Error(response.status);
  }
  return response.data;
}

export async function addContact({ name, number }) {
  const response = await axios.post(BASE_URL, { name, number });
  if (response.status !== CREATED_OK) {
    throw new Error(response.status);
  }
  return response.data;
}

export async function deleteContact(id) {
  const response = await axios.delete(BASE_URL + id);
  if (response.status !== RESPONSE_OK) {
    throw new Error(response.status);
  }
  return response.data;
}
