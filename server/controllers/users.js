import Users from "../models/Users.js";
import NewUsers from "../models/UserRegister.js";

export const addUser = async (req, res) => {
  console.log(req.body);
  const user = await Users.create(req.body);
  res.status(200).json(user);
};

export const checkUser = async (req, res) => {
  const user = await Users.find({
    email: req.body.email,
    password: req.body.password,
  });
  console.log(user);
  if (user.length !== 0) {
    res.status(200).json({ success: true, data: user });
  } else {
    res.status(200).json({ success: false });
  }
};

export const getAllUser = async (req, res) => {
  const users = await Users.find();
  res.status(200).json(users);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await Users.findByIdAndDelete(id);
  res.status(200).json(user);
};

export const addRegisteredUser = async (req, res) => {
  console.log(req.params.id);

  const newuser = await NewUsers.findByIdAndDelete(req.params.id);
  // console.log(newuser[0].email);
  console.log(newuser);
  // await delete newuser._id;
  let newuserdata = {
    name: newuser.name,
    email: newuser.email,
    password: newuser.password,
    contact: newuser.contact,
    type: "User",
  };
  console.log(newuserdata);

  const user = await Users.create(newuserdata);
  res.status(200).json({ success: true, data: user });
};

export const checkUniqueEmail = async (req, res) => {
  const user = await Users.find({
    email: req.body.email,
  });
  if (user.length !== 0) {
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ success: false });
  }
};
