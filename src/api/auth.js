import axios from '@/api/axios'

const login = (credentials) => {
  return axios.post('/login', credentials)
}

const register = (credentials) => {
  return axios.post('/register', credentials)
}

export default {
  login,
  register,
}
