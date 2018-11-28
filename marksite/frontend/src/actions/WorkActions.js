import Axios from 'axios';

const server = "https://ff7backend.herokuapp.com/api/work"
// const server = "http://localhost:8000/api/work"

export const GET_WORK = 'GET_WORK';
export const GET_WORK_ID = 'GET_WORK_ID'


export const getWork = () => {
    const token = window.localStorage.getItem("user_work") || null;
    const config = { headers: { "Authorization": `Bearer ${token}` } };
    const payload = Axios.get(`${server}`, config);
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
    await Axios.put(`${server}/${id}`, work);
    return dispatch => {
        dispatch(getWork());
    }
}

export const deleteWork = async id => {
    await Axios.delete(`${server}/${id}`);
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