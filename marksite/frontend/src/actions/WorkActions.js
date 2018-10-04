import Axios from 'axios';

export const GET_WORK = 'GET_WORK';
export const GET_WORK_ID = 'GET_WORK_ID'
export const LOGIN = 'LOGIN';

export const getWork = () => {
    const token = window.localStorage.getItem("user_work") || null;
    const config = { headers: { "Authorization": `Bearer ${token}` } };
    const payload = Axios.get('http://localhost:8000/api/work', config);
    return {
        type: GET_WORK,
        payload,
    };
}

export const addWork = async work => {
    const token = window.localStorage.getItem("user_work") || null;
    const config = { headers: { "Authorization": `Bearer ${token}` } };
    await Axios.post('http://localhost:8000/api/work', work, config)
    return dispatch => {
        dispatch(getWork());
    }
}

export const updateWork = async (work, id) => {
    await Axios.put(`http://localhost:8000/api/work/${id}`, work);
    return dispatch => {
        dispatch(getWork());
    }
}

export const markComplete = (work, id) => {
    work.completed =!work.completed;
    Axios.put(`http://localhost:8000/api/work/${id}`, work)
    return dispatch => {
        dispatch(getWork());
    }
}

export const deleteWork = async id => {
    await Axios.delete(`http://localhost:8000/api/work/${id}`)
    return dispatch => {
        dispatch(getWork());
    }
}
export const getWorkById = async (work, id) => {
    await Axios.get(`http://localhost:8000/api/work/${id}`, work);
    return dispatch => {
        dispatch(getWork());
    }
}