const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql')
const fetch = require('node-fetch')

const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: '...',

  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: () => 'drodrigo',
    },
  }),
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
      user: {
        type: UserType,
        args: {
          name: {
            type: GraphQLString,
          },
        },
        resolve: () => fetch('https://www.google.com'),
      },
    }),
  }),
})
