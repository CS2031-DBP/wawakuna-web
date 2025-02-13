import axios from 'axios'
import { API_URL } from '../utils/Utils';

export default class Api {
    

    //Auth
    async fetchLogin(body) {
        return await axios.post(API_URL + "/auth/login", body).then(response => {
            const token = response.data.Token;
            localStorage.setItem('token', token);
            return token;
        }).catch(error => {
            throw error;
        });
    }

    //Publicacion
    async postPublicacion(body) {
        const token = localStorage.getItem('token');
        axios.post(API_URL + "/publicacion", body, {headers: {"Authorization": "Bearer " + token}}).catch(error => {
            throw error;
        });
    }

    async getPublicacion(id) {
        const token = localStorage.getItem('token');
        return await axios.get(API_URL + "/publicacion/" + id, {headers: {"Authorization": "Bearer " + token}}).then(response => {
            return response.data;
        }).catch(error => {
            throw error;
        });
    }

    async likePublicacion(id) {
        const token = localStorage.getItem('token');
        axios.post(API_URL + "/publicacion/like/" + id, {headers: {"Authorization": "Bearer " + token}}).catch(error => {
            throw error;
        });
    }

    async unlikePublicacion(id) {
        const token = localStorage.getItem('token');
        axios.delete(API_URL + "/publicacion/like/" + id, {headers: {"Authorization": "Bearer " + token}}).catch(error => {
            throw error;
        });
    }

    //Comentario
    async postComentario(body, id) {
        const token = localStorage.getItem('token');
        axios.post(API_URL + "/comentario", body, {
            headers: {"Authorization": "Bearer " + token},
            params: {"PublicacionId": id}
        }).catch(error => {
            throw error;
        });
    }

    async getComentario(id) {
        const token = localStorage.getItem('token');
        return await axios.get(API_URL + "/comentario/" + id, {headers: {"Authorization": "Bearer " + token}}).then(response => {
            return response.data;
        }).catch(error => {
            throw error;
        });
    }

    //Hijo
    async getHijo(id) {
        const token = localStorage.getItem('token');
        return await axios.get(API_URL + "/hijo/" + id, {headers: {"Authorization": "Bearer " + token}}).then(response => {
            return response.data;
        }).catch(error => {
            throw error;
        });
    }

    async postHijo(body, id) {
        const token = localStorage.getItem('token');
        axios.post(API_URL + "/hijo", body, {
            headers: {"Authorization": "Bearer " + token},
            params: {"idPadre": id}
        }).catch(error => {
            throw error;
        });
    }

    async getHijoPublicaciones(id) {
        const token = localStorage.getItem('token');
        return await axios.get(API_URL + "/hijo/" + id + "/publicaciones", {headers: {"Authorization": "Bearer " + token}}).then(response => {
            return response.data;
        }).catch(error => {
            throw error;
        });
    }

}