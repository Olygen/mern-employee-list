import sendRequest from './send-request';

const BASE_URL = '/api/teams';

// Retrieve an unpaid team for the logged in user
export function getGroup() {
  return sendRequest(`${BASE_URL}/group`);
}

// Add an employee to the group
export function addEmployeeToGroup(employeeId) {
  // Just send employeeId for best security (no pricing)
  return sendRequest(`${BASE_URL}/group/employees/${employeeId}`, 'POST');
}

// Update the employee's qty in the group
// Will add the employee to the team if not currently in the group
// Sending info via the data payload instead of a long URL
export function setEmployeeQtyInGroup(employeeId, newQty) {
  return sendRequest(`${BASE_URL}/group/qty`, 'PUT', { employeeId, newQty });
}

// Updates the team's (group's) isPaid property to true
export function enough() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/group/enough`, 'POST');
}

// Return all paid teams for the logged in user
export function getTeamHistory() {
  return sendRequest(`${BASE_URL}/history`);
}
