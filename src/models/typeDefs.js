import { gql } from "apollo-server";

import authors from "./authors.model";
import books from "./books.model";

export default gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  ${books}
  ${authors}
`;
