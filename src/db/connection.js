import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Db is connected"));
