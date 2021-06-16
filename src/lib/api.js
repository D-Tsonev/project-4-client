import axios from 'axios'


const baseUrl = '/api'

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