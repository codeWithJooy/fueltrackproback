const LedgerModel = require("../../models/Ledger");
const PartyVehicle = require("../../models/pumpNozel/partyVehicle");
const PumpPartySales=require("../../models/pumpNozel/pumpPartySales");

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
    return res.json({code:200,model:savePartySales})
  }catch(error){
    return res.status(500).json({code:500,msg:error.message})
  }
}
const getPartySales=async(req,res)=>{
  try{
    const {pumpId}=req.body
    let query={pumpId}
    
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
module.exports = {
  getPartyName,
  addPartyVehicle,
  getPartyVehicle,
  addPartySales,
  getPartySales,
};