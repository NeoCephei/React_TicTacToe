const BASE_URL = 'http://localhost:3005';

function fetchRequest (path, options) {
  return fetch(BASE_URL + path, options)
    .then(res => res.status < 400 ? res : Promise.reject())
    .then(res => res.status !== 204 ? res.json() : res)
    .catch(err => {
      console.error('Error', err);
    })
}

function getTasks () {
  return fetchRequest('/tasks')
}

function postTask (body) {
  console.log(JSON.stringify(body))
  return fetchRequest('/tasks', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
}

function updateTask (id, flag, body) {
  return fetchRequest(`/tasks/${id}/${flag}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
}

function deleteTask (id) {
  return fetchRequest(`/tasks/${id}`, {
    method: 'DELETE'
  })
}

const ApiService = {
  getTasks, postTask, updateTask, deleteTask
}

export default ApiService;