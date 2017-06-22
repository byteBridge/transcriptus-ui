import axios from 'axios'

let instance = axios.create({
  baseURL: 'http://localhost:3000'
})

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default instance
