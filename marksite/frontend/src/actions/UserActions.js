import Axios from 'axios';

const server = "https://ff7backend.herokuapp.com/api/users"
// const server = 'http://localhost:8000/'

export const LOGIN_REGISTER = 'LOGIN_REGISTER';
export const GET_USERS = 'GET_USERS';
export const GET_USER_ID = 'GET_USER_ID';

export const loginRegister = (user, route) => {
    const payload = Axios.post(`${server}/${route}`, user);
    return {
        type: LOGIN_REGISTER,
        payload,
    }
}
export const getUserById = async (user, id) => {
    await Axios.get(`${server}/${id}`, user);
    return dispatch => {
        dispatch(getUsers());
    }
}
export const getUsers = () => {
    const payload = Axios.get(`${server}`);
    return {
        type: GET_USERS,
        payload,
    };
}