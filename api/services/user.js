const axios = require('axios')

const endpoint = 'https://api.github.com'

exports.fetchUser = (username) =>
  axios(`${endpoint}/users/${username}`)
  .then(response => response.data)
