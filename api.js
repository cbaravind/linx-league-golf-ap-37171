import { API_URL, CSRF_Token } from "./src/constants";

export const signup = (data, cb) => {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            // apikey: API_KEY,
            // Authorization: `Bearer ${token}`,
        },
        redirect: 'follow',
        body: JSON.stringify(data)
    };
    fetch(`${API_URL}/rest-auth/registration/`, requestOptions)
        .then(response => response.text())
        .then(result => cb(JSON.parse(result)))
        .catch(error => console.log('error++=', error));
};

export const login = (data, cb) => {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        redirect: 'follow',
        body: JSON.stringify(data)
    };
    fetch(`${API_URL}/rest-auth/login/`, requestOptions)
        .then(response => response.text())
        .then(result => cb(JSON.parse(result)))
        .catch(error => console.log('error++=', error));
};
export const resetPassword = (data, cb) => {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        redirect: 'follow',
        body: JSON.stringify(data)
    };
    fetch(`${API_URL}/rest-auth/password/reset/`, requestOptions)
        .then(response => response.text())
        .then(result => cb(JSON.parse(result)))
        .catch(error => console.log('error++=', error));
};
export const confirmResetPassword = (data, cb) => {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        redirect: 'follow',
        body: JSON.stringify(data)
    };
    fetch(`${API_URL}/rest-auth/password/reset/confirm/`, requestOptions)
        .then(response => response.text())
        .then(result => cb(JSON.parse(result)))
        .catch(error => console.log('error++=', error));
};

export const logout = async () => {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            // apikey: API_KEY,
            // Authorization: `Bearer ${token}`,
        },
        redirect: 'follow',
    };

    const url = `${API_URL}/rest-auth/logout/`

    const response = await fetch(url, requestOptions)
    return response.text()
    // .then(response => )
    // .then(result => cb(JSON.parse(result)))
    // .catch(error => console.log('error++=', error));
};