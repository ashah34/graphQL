const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./graphQL/schema/typedef");
const { resolvers } = require("./graphQL/schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`YOUR API IS RUNNING AT: ${url} :)`);
});