const express = require('express')
const app =  express()
const graphqlHTTP = require('express-graphql');
const schemas = require('./schemas')
const cors = require('cors')

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema: schemas,
  graphiql: true,
}))

app.listen('4000')
