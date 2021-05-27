import NewUsers from "../models/UserRegister.js";

export const addNewUser = async (req, res) => {
  console.log(req.body);
  const user = await NewUsers.create(req.body);
  res.status(200).json({success:true,data:user});
};

export const allNewUsers = async ( req, res)=> {
  const users =await NewUsers.find();
  res.status(200).json({data: users});
}

export const deleteUser = async(req,res)=> {
  // console.log(req.body);
  console.log(req.params.id);
  const user = await NewUsers.findByIdAndDelete(req.params.id);
  res.status(200).json({data:[]});
}

