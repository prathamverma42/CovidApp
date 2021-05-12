import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
  name: String,
  password: String,
  email: String,
  type: String,
});
const Users = mongoose.model("Users", UserSchema);
export default Users;
