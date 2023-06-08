import axios from '@/api/axios'

const getFeed = (getFeed) => {
  return axios.get(getFeed)
}

const addItem = (addItem, credentials) => {
  return axios.post(addItem, credentials)
}

export default {getFeed, addItem}
