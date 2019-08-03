import Axios from 'axios';

// const server = "https://ff7backend.herokuapp.com/api/users"
const server = 'http://localhost:8081/api/users'

export const LOGIN_REGISTER = 'LOGIN_REGISTER';
export const GET_USERS = 'GET_USERS';
export const GET_USER_ID = 'GET_USER_ID';

export const loginRegister = (user, route) => {
    console.log("actions user",user)
    const token = window.localStorage.getItem("user") || null;
    const config = { headers: { "Authorization": `Bearer ${token}` } };
    const payload = Axios.post(`${server}/${route}`, user, config);
    console.log("action payload", payload)
    return {
        type: LOGIN_REGISTER,
        payload,
    }
}
export const updateUser = async (user, id) => {
    await Axios.put(`${server}/${id}`, user);
    return dispatch => {
        dispatch(getUserById());
    }
}
export const getUserById = async (user, id) => {
    await Axios.get(`${server}/${id}`, user);
    return dispatch => {
        dispatch(getUserById());
    }
}
export const getUsers = () => {
    const payload = Axios.get(`${server}`);
    return {
        type: GET_USERS,
        payload,
    };
}
export const getUser = () => {
    const token = window.localStorage.getItem("user_info") || null;
    const config = { headers: { "Authorization": `Bearer ${token}` } };
    const payload = Axios.get(`${server}`, config);
    return {
        type: GET_USERS,
        payload,
    };
}