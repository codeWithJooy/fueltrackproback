const PumpOtherModel = require("../../models/pumpNozel/other");
const NoFuelModel = require("../../models/noFuel");

const addOtherSale = async (req, res) => {
  try {
    const { pumpId, productId,productName, date, quantity, rate, amount } = req.body;
    const other = new PumpOtherModel({
      pumpId,
      productId,
      productName,
      date,
      quantity,
      rate,
      amount,
    });
    const saveOther = await other.save();
    return res.json({ code: 200, model: saveOther });
  } catch (error) {
    return res.status(500).json({ code: 500, msg: error.message });
  }
};

const getOtherSale = async (req, res) => {
  try {
    const { pumpId, productId, date } = req.body;
    let query = { pumpId, date };
    if (productId) {
      query.productId = productId;
    }
    const otherSale = await PumpOtherModel.find(query);
   
    let arr = [];
    if (otherSale) {
      for (let i = 0; i < otherSale.length; i++) {
              let obj = {};
              obj.pumpId = otherSale[i].pumpId;
              obj.productName = otherSale[i].productName;
              obj.productId = otherSale[i].productId; // Access productId from productNameObject
              obj.quantity = otherSale[i].quantity;
              obj.rate = otherSale[i].rate;
              obj.amount = otherSale[i].amount;
              arr.push(obj);
              console.log(obj.productName);
      }
      return res.json({code:200,model:arr})
    }
    else{
        return res.json({code:200,model:[]})
    }
  } catch (error) {
    return res.status(500).json({ code: 500, msg: error.message });
  }
};
const getAllProducts=async(req,res)=>{
    try{
      const {pumpId}=req.body
      const products=await NoFuelModel.find({pumpId})
      return res.json({code:200,model:products})
    }
    catch(error){
      return res.status(500).json({code:500,msg:error.message})
    }
}
module.exports = {
  addOtherSale,
  getOtherSale,
  getAllProducts,
};
