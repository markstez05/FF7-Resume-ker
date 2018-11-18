import Axios from 'axios';

// const server = 'http://localhost:8000/api/skill';
const server = "https://api.mlab.com/api/1/databases/ff7/collections/skills/?apiKey=HqxRnYbr4bJHTMfFJnNcolDVwCGWE-d7"

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

export const deleteSkill = async _id => {
    await Axios.delete(`${server}/${_id}`)
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