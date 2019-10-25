import { GET_MEDIA } from '../actions/MediaActions';

export default (media={}, action) => {
    switch(action.type) {
        case GET_MEDIA:
        return action.payload;
        default:
            return media;
    }
}