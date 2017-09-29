const axios = require('axios')

const endpoint = 'https://api.github.com'

const fetch = username =>
  axios(`${endpoint}/users/${username}`)
    .then(response => response.data)

const fetchAll = (since) =>
  axios(`${endpoint}/users?since=${since}`)
    .then(response => response.data)

module.exports = {
  fetch,
  fetchAll
}
