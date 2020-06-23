const { gql } = require('apollo-server');


/**
 * @Query: describes what data we can fetch, to specify arguments you need to put them inside the parens.  
 * other types are where we specidy all the properties and their data rypes that are available for this particular type.
 * PokemonType is yet another object type. The types property is used for storing an array of objects so we also have to break down the object to its expected properties:
 * more types on cheatsheet: https://devhints.io/graphql#schema
 * 
 */

const typeDefs = gql`
  type Query {
    pokemon(id: ID!): Pokemon
  }

  type Pokemon {
    id: ID!
    name: String
    desc: String
    pic: String
    types: [PokemonType!]!
  }

  type PokemonType {
    id: Int!
    name: String!
  }
`;

module.exports = typeDefs;