import Axios from 'axios';

const server = "https://ff7backend.herokuapp.com/api/skill";
// const server = 'http://localhost:8000/api/skill';

export const GET_SKILL = 'GET_SKILL';
export const GET_SKILL_ID = 'GET_SKILL_ID'
export const LOGIN = 'LOGIN';

export const getSkill = () => {
    const token = window.localStorage.getItem("user_skill") || null;
    const config = { headers: { "Authorization": `Bearer ${token}` } };
    const payload = Axios.get(`${server}`, config);
    return {
        type: GET_SKILL,
        payload,
    };
}

export const addSkill = async skill => {
    const token = window.localStorage.getItem("user_skill") || null;
    const config = { headers: { "Authorization": `Bearer ${token}` } };
    await Axios.post(`${server}`, skill, config)
    return dispatch => {
        dispatch(getSkill());
    }
}

export const updateSkill = async (skill, id) => {
    await Axios.put(`${server}/${id}`, skill);
    return dispatch => {
        dispatch(getSkill());
    }
}

export const deleteSkill = async id => {
    await Axios.delete(`${server}/${id}`)
    return dispatch => {
        dispatch(getSkill());
    }
}
export const getSkillById = async (skill, id) => {
    await Axios.get(`${server}/${id}`, skill);
    return dispatch => {
        dispatch(getSkill());
    }
}