import Axios from 'axios';

export const GET_SKILL = 'GET_SKILL';
export const GET_SKILL_ID = 'GET_SKILL_ID'
export const LOGIN = 'LOGIN';

export const getSkill = () => {
    const token = window.localStorage.getItem("user_skill") || null;
    const config = { headers: { "Authorization": `Bearer ${token}` } };
    const payload = Axios.get('http://localhost:8000/api/skill', config);
    return {
        type: GET_SKILL,
        payload,
    };
}

export const addSkill = async skill => {
    const token = window.localStorage.getItem("user_skill") || null;
    const config = { headers: { "Authorization": `Bearer ${token}` } };
    await Axios.post('http://localhost:8000/api/skill', skill, config)
    return dispatch => {
        dispatch(getSkill());
    }
}

export const updateSkill = async (skill, id) => {
    await Axios.put(`http://localhost:8000/api/skill/${id}`, skill);
    return dispatch => {
        dispatch(getSkill());
    }
}

export const deleteSkill = async id => {
    await Axios.delete(`http://localhost:8000/api/skill/${id}`)
    return dispatch => {
        dispatch(getSkill());
    }
}
export const getSkillById = async (skill, id) => {
    await Axios.get(`http://localhost:8000/api/skill/${id}`, skill);
    return dispatch => {
        dispatch(getSkill());
    }
}