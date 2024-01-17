const User=require("../models/user")

const Signup=async(req,res)=>{
    try{
      const {firstname,lastname,email,password}=req.body
      let user=await User.findOne({email})
      if(user){
        return res.json({code:409,msg:"User Already Present"})
      }
      else{
        const newUser=new User({firstname,lastname,email,password})
        await newUser.save()
        return res.json({code:200,message:"Signup Successful",ownerId:newUser._id,email:newUser.email})
      }
    }
    catch(err){
      console.log(err.message)
       return res.status(502).json({code:502,msg:err.message})
    }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user in the database by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.json({ code: 401, msg: 'Invalid credentials' });
    }

    // Check if the password is correct (you might need to compare hashed passwords)
    if (user.password !== password) {
      return res.json({ code: 401, msg: 'Invalid credentials' });
    }

    // At this point, the login is successful
    return res.json({ code: 200, ownerId:user._id,email:user.email,setup:user.setup });
  } catch (err) {
    console.error('Error during login:', err);
    return res.status(500).json({ code: 500, msg: 'Internal Server Error' });
  }
};

module.exports={
    Signup,
    login,
}