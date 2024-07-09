export const initializeState = (keys) => {
    const obj = {};
    keys.forEach(
        key => {
            obj[key] = '';
        }
    );
    return obj;
};

export const API_URL = "http://3.84.149.116:8080";

export const getToken = () => {
    return localStorage.getItem('token');
}

export const deleteToken = () => {
    return localStorage.removeItem('token');
}