import mongoose from "mongoose";

const Schema = mongoose.Schema;

const booksSchema = new Schema({
  title: String,
  author: String,
  pageAmount: Number
});

export default mongoose.model("books", booksSchema);
