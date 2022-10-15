import { call, put } from 'redux-saga/effects'

//call means doing async task i.e calling api and getting data


//put means dispatch action i.e same or other



import { addUserData, deleteUserData, getUserData, getUserDataById, updateUserData } from '../api/userApi';
import { getData, setData } from '../../redux/actions/user';

function* getUserDataHandler() {
    try {
        //get the users data
        let response = yield call(getUserData);

        yield put(setData(response.data.users));

    } catch (err) {
        console.log(err);
    }
}

function* getUserDataByIdHandler() {

}

function* addUserDataHandler({ user }) {
    try {
        //get the users data
        let response = yield call(addUserData, user);

        yield put(getData());

    } catch (err) {
        console.log(err);
    }
}

function* updateUserDataHandler(action) {
    try {
        //get the users data
        let response = yield call(updateUserData);

        yield put(getData());

    } catch (err) {
        console.log(err);
    }
}

function* deleteUserDataHandler({ id }) {
    try {
        //get the users data
        let response = yield call(deleteUserData, id);

        // yield put(e());

    } catch (err) {
        console.log(err);
    }
}

export { getUserDataByIdHandler, getUserDataHandler, addUserDataHandler, deleteUserDataHandler, updateUserDataHandler };