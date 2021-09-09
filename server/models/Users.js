import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
  name: String,
  password: String,
  email: {
    type: String,
    unique: true,
  },
  type: String,
});
const Users = mongoose.model("Users", UserSchema);
export default Users;
