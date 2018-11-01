import Axios from 'axios';

// const server = 'https://ff7app.firebaseio.com'
const server = 'http://localhost:8000'
export const LOGIN_REGISTER = 'LOGIN_REGISTER';

export const loginRegister = (user, route) => {
    const payload = Axios.post(`${server}/api/users/${route}`, user);
    return {
        type: LOGIN_REGISTER,
        payload,
    }
}