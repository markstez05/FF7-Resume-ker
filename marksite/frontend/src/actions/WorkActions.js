import Axios from 'axios';

const server = "https://api.mlab.com/api/1/databases/ff7/collections/works"
const api = "?apiKey=HqxRnYbr4bJHTMfFJnNcolDVwCGWE-d7"

// const server = "http://localhost:8000/api/work"

export const GET_WORK = 'GET_WORK';
export const GET_WORK_ID = 'GET_WORK_ID'
export const LOGIN = 'LOGIN';

export const getWork = () => {
    const token = window.localStorage.getItem("user_work") || null;
    const config = { headers: { "Authorization": `Bearer ${token}` } };
    const payload = Axios.get(`${server}/${api}`, config);
    return {
        type: GET_WORK,
        payload,
    };
}

export const addWork = async work => {
    const token = window.localStorage.getItem("user_work") || null;
    const config = { headers: { "Authorization": `Bearer ${token}` } };
    await Axios.post(`${server}`, work, config)
    return dispatch => {
        dispatch(getWork());
    }
}

export const updateWork = async (work, id) => {
    await Axios.put(`${server}/${id}/${api}`, work);
    return dispatch => {
        dispatch(getWork());
    }
}

export const markComplete = (work, id) => {
    work.completed =!work.completed;
    Axios.put(`${server}/${id}/${api}`, work)
    return dispatch => {
        dispatch(getWork());
    }
}

export const deleteWork = async (work, id) => {
    await Axios.delete(`${server}/${work.id}/${api}`, work);
    return dispatch => {
        dispatch(getWork());
    }
}
export const getWorkById = async (work, id) => {
    await Axios.get(`${server}/${id}`, work);
    return dispatch => {
        dispatch(getWork());
    }
}