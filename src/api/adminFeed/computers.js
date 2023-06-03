import axios from '@/api/axios'

const getComputers = (credentials) => {
  return axios.get('/computers')
}

export default {getComputers}
