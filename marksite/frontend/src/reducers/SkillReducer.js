import { GET_SKILL } from '../actions/SkillActions';

export default (skills=[], action) => {
    switch(action.type) {
        case GET_SKILL:
        return action.payload.data;
        default:
            return skills;
    }
}