import express, { request, response } from "express";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';


const app = express();
app.use(express.json());

//cors middleware
//Option 1: allow all  origins with default of cors (*)
app.use(cors());
//option 2 : Allow custom origins
// cors({
//   origin: "http://localhost:3000",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ['Content-Type'],
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/books', booksRoute)


mongoose.connect("mongodb://127.0.0.1:27017/book-store");
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
