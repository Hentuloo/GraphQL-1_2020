import mongoose from "mongoose";

const Schema = mongoose.Schema;

const authorsSchema = new Schema({
  books: [
    {
      title: String,
      author: String,
      pageAmount: Number
    }
  ],
  name: String,
  secondName: String,
  age: Number
});

export default mongoose.model("authors", authorsSchema);
