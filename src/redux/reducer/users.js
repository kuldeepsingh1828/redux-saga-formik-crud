let initial = { users: [] }
export default function userReducer(state = initial, action) {
    console.log(action);
    switch (action.type) {
        case 'DELETE_USER_DATA':
            let users = state.users.filter((user, index) => index != action.id);
            state = { ...state, users };
        case 'SET_DATA':
            state = { ...state, users: action.users };
            break;
        default:
    }
    return state;
}