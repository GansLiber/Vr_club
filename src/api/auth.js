import axios from '@/api/axios'

const login = (credentials) => {
  return axios.post('/login', credentials)
}

export default {
  login,
}
