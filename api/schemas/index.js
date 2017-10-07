const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require('graphql')
const user = require('../services/user')

const UserListType = new GraphQLObjectType({
  name: 'UserListType',
  description: '...',

  fields: () => ({
    login: {
      type: GraphQLString,
      resolve: data => data.login,
    },
    id: {
      type: GraphQLInt,
      resolve: data => data.id,
    },
    name: {
      type: GraphQLString,
      resolve: data => data.name,
    },
    created_at: {
      type: GraphQLString,
      resolve: data => data.created_at,
    },
  }),
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Github',

    fields: () => ({
      user: {
        type: UserListType,
        args: {
          name: {
            type: GraphQLString,
          },
        },
        resolve: (root, args) => user.fetch(args.name),
      },
      users: {
        type: new GraphQLList(UserListType),
        args: {
          since: {
            type: GraphQLInt,
          },
        },
        resolve: (root, args) => user.fetchAll(args.since),
      },
    }),
  }),
})
