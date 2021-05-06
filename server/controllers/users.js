import Users from '../models/Users.js';
export const addUser=async (req,res)=>{
    // console.log(req.body);
    const user=await Users.create(req.body);
    res.status(200).json(user);
}
export const checkUser=async (req,res)=>{
    console.log(req.body);
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