import Axios from 'axios';
const server = 'http://ff7.herokuapp.com'
export const LOGIN_REGISTER = 'LOGIN_REGISTER';

export const loginRegister = (user, route) => {
    const payload = Axios.post(`${server}/api/users/${route}`, user);
    return {
        type: LOGIN_REGISTER,
        payload,
    }
}