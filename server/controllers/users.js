import Users from '../models/Users.js';
export const addUser=async (req,res)=>{
    console.log(req.body);
    const user=await Users.create(req.body);
    res.status(200).json(user);
}
export const checkUser=async (req,res)=>{
    // console.log(req.body);
    // const user=[];
    const user=await Users.find({email:req.body.email,password:req.body.password});
    console.log(user);
    if(user.length!==0)
    {
        res.status(200).json({success: true,data: user});

    }
    else
    {
        res.status(200).json({success: false});
    }
}

export const getAllUser = async (req,res)=> {
    const users = await  Users.find();
    res.status(200).json(users);
}
export const deleteUser = async(req,res)=> {
    // console.log(req.params.id);
    // console.log(req.body);
    const {id}= req.params;
    const user = await Users.findByIdAndDelete(id);
    // console.log(user);
    res.status(200).json(user);

}