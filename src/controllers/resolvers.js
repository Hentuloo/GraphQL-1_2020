import author from "./author.resolvers";
import books from "./book.resolvers";

import { mergeDeep } from "../helpers";

export default mergeDeep(author, books);
