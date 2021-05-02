import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

const MONGO_URI =
  "mongodb+srv://pverma42:prathamverma26142@cluster1.mkm8i.mongodb.net/test";
const PORT = 5000;

mongoose
  .connect(MONGO_URI, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(
    app.listen(PORT),
    console.log(`Server started running at PORT ${PORT}`)
  );
