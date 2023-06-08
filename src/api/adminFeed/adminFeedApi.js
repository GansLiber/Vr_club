import axios from '@/api/axios'

const getFeed = (getFeed) => {
  return axios.get(getFeed)
}

const addItem = (addItem, credentials) => {
  return axios.post(addItem, credentials)
}

const changeItem = (changeItem, credentials) => {
  return axios.put(changeItem, credentials)
}

const delItem = (changeItem, credentials) => {
  return axios.delete(changeItem, credentials)
}
export default {getFeed, addItem, changeItem, delItem}
