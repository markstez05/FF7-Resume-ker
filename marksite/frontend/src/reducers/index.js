import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import WorkReducer from './WorkReducer';
import SkillReducer from './SkillReducer';
import UsersReducer from './UsersReducer';


const Reducers = combineReducers({
    UserReducer,
    WorkReducer,
    SkillReducer,
    UsersReducer
});

export default Reducers;