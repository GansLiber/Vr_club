import axios from '@/api/axios'

const login = (credentials) => {
  return axios.post('/login', credentials)
}

const register = (credentials) => {
  return axios.post('/register', credentials)
}

const requestCall = (credentials) => {
  return axios.post('/requests', credentials)
}

const logout = (credentials) => {
  return axios.post('/logout', credentials)
}

export default {
  login,
  register,
  requestCall,
  logout,
}
