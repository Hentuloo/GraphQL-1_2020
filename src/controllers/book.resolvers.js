import bookController from "./Book";

export default {
  Query: {
    books: (_, { input }, { model: { books } }) =>
      bookController.read(books, input)
  },
  Mutation: {
    addBook: (_, { input }, { model: { books } }) =>
      bookController.create(books, input),
    updateBook: (_, { query, input }, { model: { books } }) =>
      bookController.update(books, query, input),
    deleteBook: (_, { input }, { model: { books } }) =>
      bookController.del(books, input)
  }
};
