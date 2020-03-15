import "./db/connection.js";
import { ApolloServer, gql } from "apollo-server";

import typeDefs from "./models/typeDefs";
import resolvers from "./controllers/resolvers";

import books from "./models/books";
import authors from "./models/authors";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { model: { books, authors } }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
