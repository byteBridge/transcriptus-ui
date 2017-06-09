import axios from 'axios'
import querystring from 'querystring'

function login (username, password) {
  return new Promise((resolve, reject) => {
    axios
      .post('http://localhost:3000/auth/login', querystring.stringify({
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

export default { login }
