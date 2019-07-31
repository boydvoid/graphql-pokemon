const axios = require('axios')
const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLSchema} = require('graphql')

//Pokemon 
const Pokemon = new GraphQLObjectType({
  name: 'mon',
  fields: () => ({
    height: {type: GraphQLInt},
    base_experience: {type:GraphQLInt },
    name: {type: GraphQLString},
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    pokemon: {
      type: Pokemon,
      args: {
        name: {type: GraphQLString}
      },
      resolve(parent, args) {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${args.name}`)
          .then(res => res.data)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})