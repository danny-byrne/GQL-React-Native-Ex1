const  { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const PokeAPI = require('./datasources/poke');

/**
 * ApolloServer allows us to fire up an Apollo server which accepts an object containinng the schema, resolves, and datasources we've defined. 
 */


const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    pokeAPI: new PokeAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`GraphQL Server is running at ${url}`);
});