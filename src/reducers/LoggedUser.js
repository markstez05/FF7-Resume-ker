import { GET_USER, UPDATE_USER, GET_USER_ID } from '../actions/UserActions';

export default (user={}, action) => {
    switch(action.type) {
        case GET_USER:
            return JSON.parse(action.payload);
        case UPDATE_USER:
            const updateUser = JSON.stringify(action.payload.data);
            window.localStorage.setItem("user", updateUser)
            return action.payload.data; 
        case GET_USER_ID: 
        const updateUser2 = JSON.stringify(action.payload.data);
        window.localStorage.setItem("user", updateUser2)
        return action.payload.data; 
        default:
            return user;
    }
}