const Pumps=require("../../models/pumps")

const getPumpName=async(req,res)=>{
    try{
      const {pumpId}=req.body
      const pumpData=await Pumps.findOne({_id:pumpId})
      if(pumpData){
        return res.json({code:200,name:pumpData.name})
      }
      else{
        return res.json({code:200,name:"Unknown"})
      }
    }catch(error){
        return res.status(500).json({code:500,msg:error.message})
    }
}

module.exports={
    getPumpName,
}