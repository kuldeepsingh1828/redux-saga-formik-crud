import { takeLatest } from 'redux-saga/effects'
import { addUserDataHandler, deleteUserDataHandler, getUserDataHandler } from '../handlers/userHandler';

function* watcher() {
    yield takeLatest('GET_DATA', getUserDataHandler);
    yield takeLatest('DELETE_DATA', deleteUserDataHandler);
    yield takeLatest('ADD_DATA', addUserDataHandler);
}

export { watcher }