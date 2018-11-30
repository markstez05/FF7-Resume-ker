import { GET_USERS } from '../actions/UserActions';

export default (users=[], action) => {
    switch(action.type) {
        case GET_USERS:
        return action.payload.data;
        default:
            return users;
    }
}