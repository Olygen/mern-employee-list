import sendRequest from './send-request';

const BASE_URL = '/api/employees';

export function getAll() {
  console.log('getAll');
  console.log(BASE_URL)
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
