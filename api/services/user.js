const axios = require('axios')
const Github = require('github-api')
require('dotenv').config()

const endpoint = 'https://api.github.com'

const me = new Github({
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
}).getUser()

const fetch = username =>
  axios(`${endpoint}/users/${username}`)
    .then(response => response.data)

const fetchAll = since =>
  axios(`${endpoint}/users?since=${since}`)
    .then(response => response.data)

const follow = (name) => {
  return me.follow(name)
    .then(() => {
      return { message: `now you're following ${name}` }
    })
    .catch((err) => {
      return { message: err }
    })
}

const unfollow = (name) => {
  return me.unfollow(name)
    .then(() => {
      return { message: `you're no longer following ${name}` }
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
