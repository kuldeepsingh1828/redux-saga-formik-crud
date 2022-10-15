function getData() {
    return { type: 'GET_DATA' };
}

function addData(user) {
    return { type: 'ADD_DATA', user };
}

function deleteData(id) {
    return { type: 'DELETE_DATA', id };
}

function updateData(user, id) {
    return { type: 'GET_DATA', user, id };
}

function setData(users) {
    return { type: 'SET_DATA', users };
}

export { getData, setData, addData, updateData, deleteData }