import axios from '@/modules/axios'
import querystring from 'querystring'

function login (username, password) {
  return new Promise((resolve, reject) => {
    axios
      .post('/auth/login', querystring.stringify({
        username,
        password
      }))

      .then(response => {
        resolve(response)
      })

      .catch(err => {
        reject(err)
      })
  })
}

function register (user) {
  return new Promise((resolve, reject) => {
    axios
      .post('/auth/register', querystring.stringify({
        username: user.username,
        password: user.password
      }))

      .then(resolve)
      .catch(reject)
  })
}
export default { login, register }
