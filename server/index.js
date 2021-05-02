import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import Resources from "./routes/Resources.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/", Resources);

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
