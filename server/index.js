import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import Resources from "./routes/Resources.js";
import Users from "./routes/users.js";
import NewUsers from "./routes/userRegister.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/resources", Resources);
app.use("/users", Users);
app.use("/newUsers", NewUsers);

const MONGO_URI =
  "mongodb+srv://pverma42:prathamverma26142@cluster1.mkm8i.mongodb.net/covidApp";
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
