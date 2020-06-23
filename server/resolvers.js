/**
 * Resolvers allow us to define the mapping of the queries we've defined in our schema to the data source method which returns the data
 * follows the format: fieldName: (parent, args, context, info) => data
 * parent: _  : an object that contains the result of the resilver in the parent type. Always blank, refers to the root of the graph. 
 * an object containing the arguments passed to the field 
 * context: this is where cwe can access our data sources.  We can extract the data source from the dataSources property. 
 * info: an object which contains information about the execution state of the operation.  not necessary in our case, so we leave blank.
 */


module.exports = {
  Query: {
    pokemon: (_, { id }, { dataSources }) =>
      dataSources.pokeAPI.getPokemonById({ id })
  }
};