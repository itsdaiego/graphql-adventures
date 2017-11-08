const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql')
const user = require('../services/user')
const repository = require('../services/repository')

const RepositoryType = new GraphQLObjectType({
  name: 'RepositoryType',
  description: '...',

  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: data => data.name,
    },
    html_url: {
      type: GraphQLString,
      resolve: data => data.html_url,
    },
    description: {
      type: GraphQLString,
      resolve: data => data.description,
    },
  }),
})

const FollowType = new GraphQLObjectType({
  name: 'FollowType',
  description: '...',

  fields: () => ({
    message: {
      type: GraphQLString,
      resolve: data => data.message,
    },
  }),
})

const UnfollowType = new GraphQLObjectType({
  name: 'UnfollowType',
  description: '...',

  fields: () => ({
    message: {
      type: GraphQLString,
      resolve: data => data.message,
    },
  }),
})

const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: '...',

  fields: () => ({
    avatar_url: {
      type: GraphQLString,
      resolve: data => data.avatar_url,
    },
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
    repositories: {
      type: new GraphQLList(RepositoryType),
      resolve: data => repository.fetchAll(data.login),
    },
  }),
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',

    fields: () => ({
      user: {
        type: UserType,
        args: {
          name: {
            type: GraphQLString,
          },
        },
        resolve: (root, args) => user.fetch(args.name),
      },
      users: {
        type: new GraphQLList(UserType),
        args: {
          since: {
            type: GraphQLInt,
          },
        },
        resolve: (root, args) => user.fetchAll(args.since),
      },
    }),
  }),

  mutation: new GraphQLObjectType({
    name: 'Mutations',

    fields: () => ({
      followUser: {
        type: FollowType,
        args: {
          name: {
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        resolve: (root, args) => user.follow(
          args.name
        ),
      },
      unfollowUser: {
        type: UnfollowType,
        args: {
          name: {
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        resolve: (root, args) => user.unfollow(
          args.name
        ),
      },
    }),
  }),
})
