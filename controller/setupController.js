const Pump = require("../models/pumps");
const User = require("../models/user");
const ItemModel=require("../models/Item")
const ItemRateModel=require("../models/ItemRate")

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
        const {pumpId}=req.body
        let query={pumpId}
        let itemData=await ItemModel.find(query)
        return res.json({code:200,model:itemData})
    }
    catch(error){
       return res.json({code:500,msg:error.message})
    }
}
const addItemRate=async(req,res)=>{
    try{
      const {ownerId,pumpId,product,date,rate}=req.body
      const newItemRate=new ItemRateModel({
        ownerId,
        pumpId,
        product,
        date,
        rate
      })
      let saveItemRate=await newItemRate.save()
      if(saveItemRate){
        return res.json({code:200,model:saveItemRate})
      }
      else{
        return res.json({code:200,model:{}})
      }
    }catch(error){
        return res.status(500).json({code:500,msg:error.message})
    }
}
const getItemRate=async(req,res)=>{
    try{
        const {pumpId,date}=req.body
        let query={pumpId}
        if(date){
            query.date=date
        }
        let itemData=await ItemRateModel.find(query)
        return res.json({code:200,model:itemData})
    }
    catch(error){
       return res.json({code:500,msg:error.message})
    }
}
const getOneItemRate=async(req,res)=>{
    try{
       const {pumpId,product}=req.body
       const query={pumpId,product}
       let item=await ItemRateModel.findOne(query)
       return res.json({code:200,model:item})
    }catch(error){
        return res.status(500).json({code:502,msg:error.message})
    }
}
module.exports = {
    setPumps,
    addItems,
    getItems,
    addItemRate,
    getItemRate,
    getOneItemRate,
};
