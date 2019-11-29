import { GET_WORK } from '../actions/WorkActions';

export default (works=[], action) => {
    switch(action.type) {
        case GET_WORK:
        return action.payload.data;
        default:
            return works;
    }
}