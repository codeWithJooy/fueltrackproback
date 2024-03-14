const LedgerModel = require("../../models/Ledger");
const PartyVehicle = require("../../models/pumpNozel/partyVehicle");
const PumpPartySales=require("../../models/pumpNozel/pumpPartySales");
const PumpPartyReceipt=require("../../models/pumpNozel/pumpPartyReceipt");
const PumpPartyPayment=require("../../models/pumpNozel/pumpPartyPayment")

const getPartyName = async (req, res) => {
  try {
    const { pumpId } = req.body;
    const query = { pumpId };
    const partyName = await LedgerModel.find(query);

    if (partyName) {
      return res.json({ code: 200, model: partyName });
    } else {
      return res.json({ code: 200, model: [] });
    }
  } catch (error) {
    return res.status(500).json({ code: 502, msg: error.message });
  }
};
const addPartyVehicle = async (req, res) => {
  try {
    const { pumpId, partyId,partyName, vehicleNo } = req.body;
    const newVehicle = new PartyVehicle({
      pumpId,
      partyId,
      partyName,
      vehicleNo,
    });
    const saveVehicle = await newVehicle.save();
    return res.json({ code: 200, model: saveVehicle });
  } catch (error) {
    return res.status(500).json({ code: 500, msg: error.message });
  }
};
const getPartyVehicle = async (req, res) => {
  try {
    const {pumpId,partyName}=req.body
    let query={pumpId,partyName}
    const allVehicles=await PartyVehicle.find({pumpId,partyName})
    return res.json({code:200,model:allVehicles})
  } catch (error) {
    return res.status(500).json({ code: 500, msg: error.message });
  }
};
const addPartySales=async(req,res)=>{
  try{
    const {pumpId,partyId,partyName,date,vehicle,salesLedger,item,qty,rate,amount,delivery,tcs,roundoff}=req.body
    let newPartySales=new PumpPartySales({
      pumpId,
      partyId,
      partyName,
      date,
      vehicle,
      salesLedger,
      item,
      qty,
      rate,
      amount,
      delivery,
      tcs,
      roundoff
    })

    const savePartySales=await newPartySales.save()
    
    let qry={pumpId,partyName}
    const partyDetails=await LedgerModel.findOne(qry)
    if (!partyDetails) {
      return res.status(404).json({
        code: 404,
        msg: 'Party not found'
      });
    }

    // Convert balance to a number and subtract saleAmount
    partyDetails.openingBalance = parseFloat(partyDetails.openingBalance) + parseFloat(amount);

    // Save updated party details
    await partyDetails.save();

    return res.json({code:200,model:savePartySales})
  }catch(error){
    return res.status(500).json({code:500,msg:error.message})
  }
}
const getPartySales=async(req,res)=>{
  try{
    const {pumpId,date,partyName,salesLedger,vehicle}=req.body
    let query={pumpId,date}
    if(partyName){
      query.partyName=partyName
    }
    if(salesLedger){
      query.salesLedger=salesLedger
    }
    if(vehicle){
      query.vehicle=vehicle
    }
    let partyData=await PumpPartySales.find(query)
    if(partyData){
      return res.json({code:200,model:partyData})
    }
    else{
      return res.json({code:200,model:[]})
    }
  }
  catch(error){
    return res.status(500).json({code:500,msg:error.message})
  }
}
const getPartySalesRange=async(req,res)=>{
  try{
    const {pumpId,initialDate,finalDate,partyName,salesLedger,vehicle}=req.body
    let query={pumpId}
    if (initialDate && finalDate) {
      query.date = { $gte: initialDate, $lte: finalDate };
    }
    if(partyName){
      query.partyName=partyName
    }
    if(salesLedger){
      query.salesLedger=salesLedger
    }
    if(vehicle){
      query.vehicle=vehicle
    }
    let partyData=await PumpPartySales.find(query)
    if(partyData){
      return res.json({code:200,model:partyData})
    }
    else{
      return res.json({code:200,model:[]})
    }
  }
  catch(error){
    return res.status(500).json({code:500,msg:error.message})
  }
}
const addPartyReceipt=async(req,res)=>{
  try{
    const {pumpId,partyId,partyName,date,amount}=req.body
    let newPartyReceipt=new PumpPartyReceipt({
      pumpId,
      partyId,
      partyName,
      date,
      amount,
    })

    const savePartySales=await newPartyReceipt.save()
    
    let qry={pumpId,partyName}
    const partyDetails=await LedgerModel.findOne(qry)
    if (!partyDetails) {
      return res.status(404).json({
        code: 404,
        msg: 'Party not found'
      });
    }

    // Convert balance to a number and subtract saleAmount
    partyDetails.openingBalance = parseFloat(partyDetails.openingBalance) - parseFloat(amount);

    // Save updated party details
    await partyDetails.save();

    return res.json({code:200,model:savePartySales})
  }catch(error){
    return res.status(500).json({code:500,msg:error.message})
  }
}
const getPartyReceipt=async(req,res)=>{
  try{
    const {pumpId,date,partyName}=req.body
    let query={pumpId,date}
    if(partyName){
      query.partyName=partyName
    }
   
    let partyData=await PumpPartyReceipt.find(query)
    console.log(partyData)
    if(partyData){
      return res.json({code:200,model:partyData})
    }
    else{
      return res.json({code:200,model:[]})
    }
  }
  catch(error){
    return res.status(500).json({code:500,msg:error.message})
  }
}
const getPartyPayment=async(req,res)=>{
  try{
    const {pumpId,date,partyName}=req.body
    let query={pumpId,date}
    if(partyName){
      query.partyName=partyName
    }
   
    let partyData=await PumpPartyPayment.find(query)
    if(partyData){
      return res.json({code:200,model:partyData})
    }
    else{
      return res.json({code:200,model:[]})
    }
  }
  catch(error){
    return res.status(500).json({code:500,msg:error.message})
  }
}
const addPartyPayment=async(req,res)=>{
  try{
    const {pumpId,partyId,partyName,date,amount}=req.body
    let newPartyPayment=new PumpPartyPayment({
      pumpId,
      partyId,
      partyName,
      date,
      amount,
    })

    const savePartySales=await newPartyPayment.save()
    
    return res.json({code:200,model:savePartySales})
  }catch(error){
    return res.status(500).json({code:500,msg:error.message})
  }
}
module.exports = {
  getPartyName,
  addPartyVehicle,
  getPartyVehicle,
  addPartySales,
  getPartySales,
  getPartySalesRange,
  addPartyReceipt,
  getPartyReceipt,
  addPartyPayment,
  getPartyPayment,
};
