import Axios from 'axios';

const server = "https://ff7backend.herokuapp.com/api/users"
// const server = 'http://localhost:8000/'

export const LOGIN_REGISTER = 'LOGIN_REGISTER';

export const loginRegister = (user, route) => {
    const payload = Axios.post(`${server}${route}`, user);
    return {
        type: LOGIN_REGISTER,
        payload,
    }
}