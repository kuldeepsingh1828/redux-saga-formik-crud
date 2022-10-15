import axios from 'axios';

let BASE_URL = 'http://localhost:4000/';

function getUserData() {
    return axios.get(`${BASE_URL}users`);
}

function getUserDataById(id) {
    return axios.get(`${BASE_URL}users/${id}`);
}

function addUserData(user) {
    return axios.post(`${BASE_URL}users`, { user })
}

function updateUserData(user, id) {
    return axios.put(`${BASE_URL}users/${id}`, { user })
}
function deleteUserData(id) {
    return axios.delete(`${BASE_URL}users/${id}`)
}


export { getUserData, getUserDataById, addUserData, updateUserData, deleteUserData };