import Axios from 'axios';

const server = "https://api.mlab.com/api/1/databases/ff7/collections/users/?apiKey=HqxRnYbr4bJHTMfFJnNcolDVwCGWE-d7"
// const server = 'http://localhost:8000/'

export const LOGIN_REGISTER = 'LOGIN_REGISTER';

export const loginRegister = (user, route) => {
    const payload = Axios.post(`${server}`, user);
    return {
        type: LOGIN_REGISTER,
        payload,
    }
}