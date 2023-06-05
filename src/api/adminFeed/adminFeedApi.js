import axios from '@/api/axios'

const getFeed = (getFeed) => {
  return axios.get(getFeed)
}

export default {getFeed}
