const Pump = require("../models/pumps");
const User = require("../models/user");
const ItemModel=require("../models/Item")

const setPumps = async (req, res) => {
    try {
        const { ownerId, pumpArray } = req.body;
        // Insert each pump into the Pump database
        for (const pumpData of pumpArray) {
            const pump = new Pump({
                ownerId,
                name: pumpData.name,
                plotNo: pumpData.plotNo,
                street: pumpData.street,
                owner: pumpData.owner,
                pan: pumpData.pan,
                gstin: pumpData.gstin,
                vat: pumpData.vat,
                cst: pumpData.cst,
                tin: pumpData.tin,
                tan: pumpData.tan,
            });

            await pump.save();
        }
        
        return res.status(200).json({ code: 200, msg: 'Pumps set successfully' });
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({ code: 500, msg: err.message });
    }
};
const addItems=async(req,res)=>{
    try{
     const {ownerId,pumpId,productName,symbol,unit,type}=req.body
     const newItem=new ItemModel({
        ownerId,
        pumpId,
        productName,
        symbol,
        unit,
        type
     })
     let saveItem=await newItem.save();
     if(saveItem){
        return res.json({code:200,model:saveItem})
     }
     else {
        return res.json({code:200,model:[]})
     }
    }catch(error){
        console.log(error.messsage)
        return res.status(500).json({code:500,msg:error.message})
    }
}
const getItems=async(req,res)=>{
    try{
        const {pumpId}=req.body()
        let query={pumpId}
        let itemData=await ItemModel.find(query)
        return res.json({code:200,model:itemData})
    }
    catch(error){
       return res.json({code:500,msg:error.message})
    }
}
module.exports = {
    setPumps,
    addItems,
    getItems,
};
