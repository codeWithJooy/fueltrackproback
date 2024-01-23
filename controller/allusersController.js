const Users=require("../models/user")

const getAllUsers=async(req,res)=>{
    try{
        let user=await Users.find({},{firstname:1,lastname:1,email:1,password:1})
        if(user)
        return res.json({code:200,model:user})
       else{
        return res.status(400).json({code:400,msg:"No user present"})
       }
    }catch(error){
        console.log(error.message)
        return res.status(500).json({code:500,msg:error.message})
    }
}

module.exports={
    getAllUsers,
}