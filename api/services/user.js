const axios = require('axios')
const Github = require('github-api')

const endpoint = 'https://api.github.com'

const fetch = username =>
  axios(`${endpoint}/users/${username}`)
    .then(response => response.data)

const fetchAll = since =>
  axios(`${endpoint}/users?since=${since}`)
    .then(response => response.data)

const follow = (name, credentials) => {
  const me = new Github({
    username: credentials.username,
    password: credentials.password,
  }).getUser()

  return me.follow(name)
    .then(() => {
      return { message: 'success' }
    })
    .catch((err) => {
      return { message: err }
    })
}

const unfollow = (name, credentials) => {
  const me = new Github({
    username: credentials.username,
    password: credentials.password,
  }).getUser()

  return me.unfollow(name)
    .then(() => {
      return { message: 'success' }
    })
    .catch((err) => {
      return { message: err }
    })
}

module.exports = {
  fetch,
  fetchAll,
  follow,
  unfollow,
}
