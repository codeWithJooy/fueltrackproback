const Nozel = require("../../models/Nozel");
const PumpNozel = require("../../models/pumpNozel/pumpNozel");
const PumpNozelClosing = require("../../models/pumpNozel/pumpNozelClosing");

const getNozelsByPumpId = async (req, res) => {
  try {
    const pumpId = req.body.pumpId;
    const nozels = await Nozel.find({ pumpId: pumpId.trim() });
    return res.json({ code: 200, model: nozels });
  } catch (error) {
    return res.status(500).json({ code: 500, msg: error.message });
  }
};
const getNozelReading=async(req,res)=>{
  try{
    const {pumpId,mpd,date,status}=req.body
    let query={pumpId,date,status}
    if(mpd){
      query.mpd=mpd
    }
    let pumpNozel = await PumpNozel.find(query)
    res.json({code:200,model:pumpNozel})
  }catch(error){
    return res.status(500).json({code:500,msg:error.message})
  }
}
const addNozelReading = async (req, res) => {
  try {
    const { data } = req.body;
    const addNozel = new PumpNozel({
      pumpId,
      nozelId,
      nozelName,
      date,
      openingMeter,
      closingMeter,
      testing,
      additionalIn,
      additionalOut,
      netSales,
      salesDsr,
      salesDiff,
    });
    const savedNozel = await addNozel.save();
    await PumpNozelClosing.findOneAndUpdate(
      { nozelId: nozelId },
      { closingMeter: closingMeter },
      { new: true } // Return the updated document
    );
    return res.status(200).json({
      code: 200,
      msg: "Nozel reading added successfully",
      data: savedNozel,
    });
  } catch (error) {
    return res.status(500).json({ code: 500, msg: error.message });
  }
};
const addNozelReadingFinal=async(req,res)=>{
  try{
   const {data}=req.body
   console
   for(let i=0;i<data.length;i++){
    const addNozel = new PumpNozel({
      pumpId:data[i].pumpId,
      mpd:data[i].mpd,
      nozelId:data[i].nozelId,
      nozelName:data[i].nozelName,
      date:data[i].date,
      openingMeter:data[i].openingMeter,
      closingMeter:data[i].closingMeter,
      testing:data[i].testing,
      additionalIn:data[i].additionalIn,
      additionalOut:data[i].additionalOut,
      netSales:data[i].netSales,
      salesDsr:data[i].salesDsr,
      salesDiff:data[i].salesDiff,
    });
    const savedNozel = await addNozel.save();
    await Nozel.findOneAndUpdate(
      { _id: data[i].nozelId },
      { closingMeter: data[i].closingMeter },
      { new: true } // Return the updated document
    );
   }
   return res.status(200).json({code:200,msg:"Nozel Reading Added"})
  }catch(error){
    console.log(error.message)
  }
}
const getPumpNozelClosingMeter = async (req, res) => {
  try {
    const { pumpId, nozelId } = req.body;
    const closingMeter = await PumpNozelClosing.findOne({ pumpId, nozelId });
    return res.json({ code: 200, model: closingMeter });
  } catch (error) {
    return res.status(500).json({ code: 500, msg: error.message });
  }
};
const getPumpNozelSale = async (req, res) => {
  try {
    const { pumpId } = req.body;
    const nozelSale = await PumpNozel.find({ pumpId });
    return res.json({ code: 200, model: nozelSale });
  } catch (error) {
    return res.status(500).json({ code: 500, msg: error.message });
  }
};

const getNozelData = async (req, res) => {
  try {
    const { pumpId } = req.body;
    const nozelData = await Nozel.find({ pumpId });
    console.log(nozelData);
    return res.json({ code: 200, model: nozelData });
  } catch (error) {
    console.error("Error retrieving nozel data:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getNozelsByPumpId,
  addNozelReading,
  addNozelReadingFinal,
  getPumpNozelClosingMeter,
  getPumpNozelSale,
  getNozelData,
  getNozelReading,
};
