const axios = require('axios')

const endpoint = 'https://api.github.com'

const fetchAll = username =>
  axios(`${endpoint}/users/${username}/repos`)
    .then(response => response.data)

module.exports = {
  fetchAll,
}
