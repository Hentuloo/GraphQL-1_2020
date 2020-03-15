import authorController from "./Author";

export default {
  Query: {
    authors: (_, { input }, { model: { authors } }) =>
      authorController.read(authors, input)
  },
  Mutation: {
    addAuthor: (_, { input }, { model: { authors } }) =>
      authorController.create(authors, input),
    updateAuthor: (_, { query, input }, { model: { authors } }) =>
      authorController.update(authors, query, input),
    deleteAuthor: (_, { input }, { model: { authors } }) =>
      authorController.del(authors, input)
  }
};
