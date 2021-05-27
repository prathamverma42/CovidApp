import mongoose from "mongoose";
const NewUserSchema = mongoose.Schema({
  name: String,
  password: String,
  email: String,
  contact: Number
});
const NewUsers = mongoose.model("NewUsers", NewUserSchema);
export default NewUsers;
