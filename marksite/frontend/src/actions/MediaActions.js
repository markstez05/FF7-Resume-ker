import Axios from 'axios';

// const server = "https://ff7backend.herokuapp.com/api/media"
const server = "http://localhost:8081/api/media/images"

export const GET_MEDIA = 'GET_MEDIA';


export const getMedia = (media, id) => {
    const token = window.localStorage.getItem("user_photo") || null;
    const config = { headers: { "Authorization": `Bearer ${token}` } };
    const payload = Axios.get(`${server}/${id}`, media, config);
    return {
        type: GET_MEDIA,
        payload,
    };
}

