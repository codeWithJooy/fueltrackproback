const PurchaseModel=require("../../models/pumpNozel/purchaseModel")

const addPumpPurchase=async(req,res)=>{
    try{
      const {pumpId,date,supplierName,purchaseLedger,itemName,qty}=req.body
      const newPurchase=new PurchaseModel({
        pumpId,
        date,
        supplierName,
        purchaseLedger,
        itemName,
        qty
      })
      const savePurchase=await newPurchase.save()
      return res.json({code:200,model:savePurchase})
    }catch(error){
        return res.status(500).json({code:500,msg:error.message})
    }
}
const getPumpPurchase=async(req,res)=>{
    try{
      const {pumpId,date,status,itemName}=req.body
      let query={pumpId,date,status}
      if(itemName){
        query.itemName=itemName
      }
      const partyExp=await PurchaseModel.find(query)
      return res.json({code:200,model:partyExp})
    }catch(error){
        return res.status(500).json({code:500,msg:error.message})
    }
}

const getPumpPurchaseRange=async(req,res)=>{
  try{
    const {pumpId,initialDate, finalDate,status,itemName}=req.body
    let query={pumpId,status}
    if(itemName){
      query.itemName=itemName
    }
    if (initialDate && finalDate) {
      query.date = { $gte: initialDate, $lte: finalDate };
    }
    const partyExp=await PurchaseModel.find(query)
    return res.json({code:200,model:partyExp})
  }catch(error){
      return res.status(500).json({code:500,msg:error.message})
  }
}
module.exports={
    getPumpPurchase,
    addPumpPurchase,
    getPumpPurchaseRange,
}