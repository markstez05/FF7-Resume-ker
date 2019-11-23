import Axios from 'axios';

const server = "https://ff7backend.herokuapp.com/api/users"
// const server = 'http://localhost:8081/api/users'

export const LOGIN_REGISTER = 'LOGIN_REGISTER';
export const GET_USERS = 'GET_USERS';
export const GET_USER = 'GET_USER';
export const GET_USER_ID = 'GET_USER_ID';
export const UPDATE_USER = 'UPDATE_USER';

export const loginRegister = (user, route) => {
    const token = window.localStorage.getItem("user") || null;
    const config = { headers: { "Authorization": `Bearer ${token}` } };
    const payload = Axios.post(`${server}/${route}`, user, config);
    return {
        type: LOGIN_REGISTER,
        payload,
    }
}
export const updateUser = async (user, id) => {
    await Axios.put(`${server}/${id}`, user);
    const payload = await Axios.get(`${server}/${id}`, user);
    console.log('USER ACTION', user)
    return {
        type: UPDATE_USER,
        payload
    }
}

export const getUserById = async (id) => {
    await Axios.get(`${server}/${id}`);
    const payload = await Axios.get(`${server}/${id}`);
    console.log('USER ACTION')
    return {
        type: GET_USER_ID,
        payload
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
    const token = window.localStorage.getItem("user") || null;
    const payload = token;
    return {
        type: GET_USER,
        payload,
    };
}