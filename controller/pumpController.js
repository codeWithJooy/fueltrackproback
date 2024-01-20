const Pump = require("../models/pumps");

const getPumps = async (req, res) => {
    try {
        const { ownerId } = req.body;

        if (!ownerId) {
            return res.status(400).json({ code: 400, msg: 'Owner ID is required' });
        }
        const pumps = await Pump.find({ ownerId });
        return res.status(200).json({ code: 200, model:pumps });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ code: 500, msg: error.message });
    }
};
const getPumpsName=async(req,res)=>{
    try{
        const {ownerId}=req.body;
        if(!ownerId){
            return res.status(400).json({code:400,msg:"Owner ID is required"})
        }
        
        const pumps=await Pump.find({ownerId},{name:1,_id:1});
        return res.status(200).json({code:200,model:pumps});
    }catch(error){
        console.log(error.message)
        return res.status(500).json({ code: 500, msg: error.message });
    }
}
module.exports = {
    getPumps,
    getPumpsName,
};
