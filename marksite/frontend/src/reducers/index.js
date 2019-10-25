import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import MediaReducer from './MediaReducer';
import WorkReducer from './WorkReducer';
import SkillReducer from './SkillReducer';
import UsersReducer from './UsersReducer';


const Reducers = combineReducers({
    UserReducer,
    WorkReducer,
    MediaReducer,
    SkillReducer,
    UsersReducer
});

export default Reducers;