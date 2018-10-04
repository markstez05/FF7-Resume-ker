import Axios from 'axios';

export const LOGIN_REGISTER = 'LOGIN_REGISTER';

export const loginRegister = (user, route) => {
    const payload = Axios.post(`http://localhost:8000/api/users/${route}`, user);
    return {
        type: LOGIN_REGISTER,
        payload,
    }
}