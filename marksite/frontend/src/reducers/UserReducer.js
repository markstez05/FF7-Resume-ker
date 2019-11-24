import { LOGIN_REGISTER } from '../actions/UserActions';
import update from 'immutability-helper';

const localStorage = window.localStorage;

export default async (UserState = {}, action) => {
    switch(action.type) {
        case LOGIN_REGISTER:
        let ns;
        if(!action.payload) {
            ns = update(UserState, {errorMessage: {$set: 'Please try again'}});
            return ns;
        }
        if(action.payload.data) {
            const { token } = action.payload.data;
            if(token) {
                localStorage.setItem("user_work", token);
                localStorage.setItem("user_skill", token);
                localStorage.setItem("user", token);
                ns = update(UserState, {errorMessage: {$set: 'Successfully logged In'}});
                return action.payload.data;
            } else {
                ns = update(UserState, {errorMessage: {$set: 'Successfully logged In'}});

            }
        } else {
            ns = update(UserState, {errorMessage: {$set: 'Successfully logged In'}});

        }
        return ns;
        default:
        return UserState;
    }
}