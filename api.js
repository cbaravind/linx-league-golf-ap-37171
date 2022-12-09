import { API_URL} from "./src/constants";
// const token='b99348f27007ad94779fc94fb3f06a84d0aa3710'
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
export const changePassword = (data,token, cb) => {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Token ${token}`
        },

        redirect: 'follow',
        body: JSON.stringify(data)
    };
    fetch(`${API_URL}/rest-auth/password/change/`, requestOptions)
        .then(response => response.text())
        .then(result => cb(JSON.parse(result)))
        .catch(error => console.log('error++=', error));
};
export const logout = (token,cb) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Token ${token}`

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
export const createProfile = (data,token,cb) => {
  const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Token ${token}`
        },
        body: JSON.stringify(data),
        redirect: 'follow',
    };
    fetch(`${API_URL}/api/v1/profile/`, requestOptions)
        .then(response => response.text())
        .then(result => cb(JSON.parse(result)))
        .catch(error => console.log('error++=', error));
   
};
export const getUserProfile = async (id,token,cb) => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Token ${token}`

        },
        redirect: 'follow',
        // body: JSON.stringify(data)
    };
    fetch(`${API_URL}/api/v1/profile/?user_id=${id}`, requestOptions)
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
            // Authorization: `Token ${token}`,
        },
        redirect: 'follow',
    };

    const url = `${API_URL}/api/v1/get-user-profile/`

    const response = await fetch(url, requestOptions)
    // console.log(response)
    return response.text()
    // .then(response => )
    // .then(result => cb(JSON.parse(result)))
    // .catch(error => console.log('error++=', error));
};