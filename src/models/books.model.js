import { gql } from "apollo-server";

export default gql`
  type Book {
    _id: ID!
    title: String!
    author: String
    pageAmount: Int
  }
  input BookInput {
    _id: ID
    title: String
    author: String
    pageAmount: Int
  }

  extend type Query {
    books(input: BookInput): [Book]
  }

  extend type Mutation {
    addBook(input: BookInput): Book
    updateBook(input: BookInput): Book
    deleteBook(input: BookInput): Book
  }
`;
