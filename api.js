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
export const logout = (cb) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        redirect: 'follow',
        // body: JSON.stringify(data)
    };
    fetch(`${API_URL}/rest-auth/logout/`, requestOptions)
        .then(response => response.text())
        .then(result => cb(JSON.parse(result)))
        .catch(error => console.log('error++=', error));
   
};
export const getPrivacyPolicy = async () => {

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            // apikey: API_KEY,
            // Authorization: `Bearer ${token}`,
        },
        redirect: 'follow',
    };

    const url = `${API_URL}/modules/privacy-policy/`

    const response = await fetch(url, requestOptions)
    // console.log(response,'====')
    return response.text()
    // .then(response => )
    // .then(result => cb(JSON.parse(result)))
    // .catch(error => console.log('error++=', error));
};
export const createProfile = async (data,cb) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-CSRFTOKEN':'5cwFtkBPDEb8YvKb6et7rsm8MAkbgwulrPIPhKVkja9jsWPDNbhWh75C7xNFt54Z'
        },
        redirect: 'follow',
        body: JSON.stringify(data)
    };
    fetch(`${API_URL}/api/v1/profile/`, requestOptions)
        .then(response => response.text())
        .then(result => cb(JSON.parse(result)))
        .catch(error => console.log('error++=', error));
   
};
export const getUser = async () => {

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            // apikey: API_KEY,
            // Authorization: `Bearer ${token}`,
        },
        redirect: 'follow',
    };

    const url = `${API_URL}/rest-auth/user/`

    const response = await fetch(url, requestOptions)
    // console.log(response)
    return response.text()
    // .then(response => )
    // .then(result => cb(JSON.parse(result)))
    // .catch(error => console.log('error++=', error));
};