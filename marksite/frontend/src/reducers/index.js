import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import WorkReducer from './WorkReducer';
import SkillReducer from './SkillReducer';


const Reducers = combineReducers({
    UserReducer,
    WorkReducer,
    SkillReducer,
});

export default Reducers;