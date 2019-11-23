import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import WorkReducer from './WorkReducer';
import SkillReducer from './SkillReducer';
import UsersReducer from './UsersReducer';
import LoggedUser from './LoggedUser';


const Reducers = combineReducers({
    LoggedUser,
    SkillReducer,
    UserReducer,
    UsersReducer,
    WorkReducer,
});

export default Reducers;