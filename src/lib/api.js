import axios from 'axios'
import { getToken } from './auth'
import { baseUrl } from '../config'


function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

export function getAllInstruments() {
  return axios.get(`${baseUrl}/instruments/`)
}

export function getSingleInstrument(id) {
  return axios.get(`${baseUrl}/instruments/${id}/`)
}

export function register(formdata) {
  return axios.post(`${baseUrl}/auth/register/`, formdata)
}

export function loginUser(formdata) {
  return axios.post(`${baseUrl}/auth/login/`, formdata)
}

export function getUser(id){
  return axios.get(`${baseUrl}/auth/profile/${id}/`, headers())
}

export  function getUserName(id){
  return axios.get(`${baseUrl}/auth/profile/${id}/`, headers())
  
}
export function getAllUsers(){
  return axios.get(`${baseUrl}/auth/profile/`, headers())
}

export function editUser(id, formdata) {
  return axios.put(`${baseUrl}/auth/profile/${id}/`, formdata, headers())
}

export function deleteUser(id, formdata) {
  return axios.delete(`${baseUrl}/auth/profile/${id}/`, formdata, headers())
}

export function logout(){
  window.localStorage.removeItem('token')
}

export function addReview(formdata,id ) {
  return axios.post(`${baseUrl}/reviews/${id}/reviews/`, formdata, headers())
}

export function deleteReview(reviewId) {
  return axios.delete(`${baseUrl}/reviews/${reviewId}/`, headers())
}



