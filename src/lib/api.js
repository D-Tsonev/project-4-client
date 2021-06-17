import axios from 'axios'

const baseUrl = '/api'

// import jwt from 'jsonwebtoken'

// import { getToken } from './auth'

export function register(formdata) {
  return axios.post(`${baseUrl}/auth/register/`, formdata)
}

export function login(formdata) {
  return axios.post(`${baseUrl}/auth/login`, formdata)
}


// function headers() {
//   return {
//     headers: { Authorization: `Bearer ${getToken()}` },
//   }


export function getAllInstruments() {
  return axios.get(`${baseUrl}/instruments/`)
}

export function getSingleInstrument(id) {
  return axios.get(`${baseUrl}/instruments/${id}/`)
}

// Auth requests

// export function registerUser(formdata) {
//   return axios.post(`${baseUrl}/register`, formdata)
// }

// export function loginUser(formdata) {
//   return axios.post(`${baseUrl}/login`, formdata)
// }