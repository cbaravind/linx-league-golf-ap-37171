import { API_URL } from "./src/constants"
// const token='b99348f27007ad94779fc94fb3f06a84d0aa3710'
export const signup = async data => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
      // apikey: API_KEY,
      // Authorization: `Bearer ${token}`,
    },
    redirect: "follow",
    body: JSON.stringify(data),
    credentials: "omit"
  }
  const url = `${API_URL}/rest-auth/registration/`
  const response = await fetch(url, requestOptions)
  return response.text()

  // fetch(`${API_URL}/rest-auth/registration/`, requestOptions)
  //     .then(response => response.text())
  //     .then(result => cb(JSON.parse(result)))
  //     .catch(error => console.log('error++=', error));
}

export const login = async data => {
  const requestOptions = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    redirect: "follow",
    body: JSON.stringify(data)
  }
  const url = `${API_URL}/rest-auth/login/`
  const response = await fetch(url, requestOptions)
  return response.text()

  // fetch(`${API_URL}/rest-auth/login/`, requestOptions)
  //     .then(response => response.text())
  //     .then(result => cb(JSON.parse(result)))
  //     .catch(error => console.log('error++=', error));
}
export const resetPassword = (data, cb) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    redirect: "follow",
    body: JSON.stringify(data)
  }
  fetch(`${API_URL}/rest-auth/password/reset/`, requestOptions)
    .then(response => response.text())
    .then(result => cb(JSON.parse(result)))
    .catch(error => console.log("error++=", error))
}
export const confirmResetPassword = (data, cb) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    redirect: "follow",
    body: JSON.stringify(data)
  }
  fetch(`${API_URL}/rest-auth/password/reset/confirm/`, requestOptions)
    .then(response => response.text())
    .then(result => cb(JSON.parse(result)))
    .catch(error => console.log("error++=", error))
}
export const changePassword = (data, token, cb) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Token ${token}`
    },

    redirect: "follow",
    body: JSON.stringify(data)
  }
  fetch(`${API_URL}/rest-auth/password/change/`, requestOptions)
    .then(response => response.text())
    .then(result => cb(JSON.parse(result)))
    .catch(error => console.log("error++=", error))
}
export const logout = (token, cb) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Token ${token}`
    },
    redirect: "follow"
  }
  fetch(`${API_URL}/rest-auth/logout/`, requestOptions)
    .then(response => response.text())
    .then(result => cb(JSON.parse(result)))
    .catch(error => console.log("error++=", error))
}
export const getPrivacyPolicy = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    redirect: "follow"
  }

  const url = `${API_URL}/modules/privacy-policy/`
  const response = await fetch(url, requestOptions)
  return response.text()
}
export const getTermsAndConditions = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    redirect: "follow"
  }

  const url = `${API_URL}/modules/terms-and-conditions/`
  const response = await fetch(url, requestOptions)
  return response.text()
}
export const updateProfilePicture = async (params, id, token) => {
  const requestOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
      Authorization: `Token ${token}`
    },
    body: params,
    redirect: "follow"
  }
  const url = `${API_URL}/api/v1/profile/${id}/`
  const response = await fetch(url, requestOptions)
  return response.text()
}

export const updateProfile = async (params, id, token) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type":"application/json",
      Accept: "application/json",
      Authorization: `Token ${token}`
    },
    body:JSON.stringify(params),
    redirect: "follow"
  }
  const url = `${API_URL}/api/v1/profile/${id}/`
  const response = await fetch(url, requestOptions)
  return response.text()
}

export const getUserProfile = async token => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // apikey: API_KEY,
      Authorization: `Token ${token}`
    },
    redirect: "follow"
  }

  const url = `${API_URL}/api/v1/get-user-profile/`
  const response = await fetch(url, requestOptions)
  return response.text()
}
export const getAllUsers = async token => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // apikey: API_KEY,
      Authorization: `Token ${token}`
    },
    redirect: "follow"
  }

  const url = `${API_URL}/api/v1/profile/`
  const response = await fetch(url, requestOptions)
  return response.text()
}
export const makeFriends =async (id,data,token) => {
  const params={friends:data,user:id}
  console.log(params)
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Token ${token}`
    },
    body:JSON.stringify(params),
    redirect: "follow"
  }
  const url=`${API_URL}/api/v1/friends/`
  const response = await fetch(url, requestOptions)
  return response.text()
}
export const getFriends = async (id,token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // apikey: API_KEY,
      Authorization: `Token ${token}`
    },
    redirect: "follow"
  }

  const url = `${API_URL}/api/v1/friends/${id}/`
  const response = await fetch(url, requestOptions)
  return response.text()
}
export const getLeagueGames = async (id,token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // apikey: API_KEY,
      Authorization: `Token ${token}`
    },
    redirect: "follow"
  }

  const url = `${API_URL}/schedules/leagues/?ordering=when&user__id=${id}`
  const response = await fetch(url, requestOptions)
  return response.text()
}
export const postLeague = async (data,token) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // apikey: API_KEY,
      Authorization: `Token ${token}`
    },
    body:JSON.stringify(data),
    redirect: "follow"
  }

  const url = `${API_URL}/schedules/leagues/`
  const response = await fetch(url, requestOptions)
  return response.text()
}
export const sendFeedback = async (data,token) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // apikey: API_KEY,
      Authorization: `Token ${token}`
    },
    body:JSON.stringify(data),
    redirect: "follow"
  }

  const url = `${API_URL}/feedbacks/data/`
  const response = await fetch(url, requestOptions)
  return response.text()
}
export const getProfile = async (id,token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // apikey: API_KEY,
      Authorization: `Token ${token}`
    },
    redirect: "follow"
  }

  const url = `${API_URL}/api/v1/profile/${id}/`
  const response = await fetch(url, requestOptions)
  return response.text()
}
export const getChatList = async (id,token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // apikey: API_KEY,
      Authorization: `Token ${token}`
    },
    redirect: "follow"
  }

  const url = `${API_URL}/api/v1/chats/?sender__id=${id}/`
  const response = await fetch(url, requestOptions)
  return response.text()
}
export const postChatRoom = async (data,token) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // apikey: API_KEY,
      Authorization: `Token ${token}`
    },
    body:JSON.stringify(data),
    redirect: "follow"
  }

  const url = `${API_URL}/api/v1/chats/`
  const response = await fetch(url, requestOptions)
  return response.text()
}