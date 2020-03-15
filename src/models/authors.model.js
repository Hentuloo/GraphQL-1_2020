import { gql } from "apollo-server";

export default gql`
  type Author {
    _id: ID!
    books: [Book]!
    name: String!
    secondName: String!
    age: Int
  }

  input AuthorInput {
    _id: ID
    bookName: String
    name: String
  }

  input newAuthorInput {
    _id: ID
    books: [BookInput]!
    name: String
    secondName: String
    age: Int
  }

  extend type Query {
    authors(input: AuthorInput): [Author]
  }

  extend type Mutation {
    addAuthor(input: newAuthorInput): Author
    updateAuthor(input: AuthorInput): Author
    deleteAuthor(input: AuthorInput): Author
  }
`;
