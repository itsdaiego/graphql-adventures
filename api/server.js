const express = require('express')
const app =  express()
const graphqlHTTP = require('express-graphql');
const schemas = require('./schemas')

app.use('/graphql', graphqlHTTP({
  schema: schemas,
  graphiql: true
}));

app.listen('4000')
