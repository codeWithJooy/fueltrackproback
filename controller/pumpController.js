const Pump = require("../models/pumps");
const ItemModel=require("../models/Item")
const ItemData=require("../data/Items")
const getPumps = async (req, res) => {
  try {
    const { ownerId } = req.body;

    if (!ownerId) {
      return res.status(400).json({ code: 400, msg: "Owner ID is required" });
    }
    const pumps = await Pump.find({ ownerId });
    return res.status(200).json({ code: 200, model: pumps });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ code: 500, msg: error.message });
  }
};
const getPumpsName = async (req, res) => {
  try {
    const { ownerId } = req.body;
    if (!ownerId) {
      return res.status(400).json({ code: 400, msg: "Owner ID is required" });
    }

    const pumps = await Pump.find({ ownerId }, { name: 1, _id: 1 });
    return res.status(200).json({ code: 200, model: pumps });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ code: 500, msg: error.message });
  }
};
const addPump = async (req, res) => {
  try {
    const {
      ownerId,
      name,
      plotNo,
      street,
      city,
      state,
      owner,
      pan,
      gstin,
      vat,
      cst,
      tin,
      tan,
    } = req.body;
    const pump = new Pump({
      ownerId,
      name,
      plotNo,
      street,
      city,
      state,
      owner,
      pan,
      gstin,
      vat,
      cst,
      tin,
      tan,
    });

    let savePump = await pump.save();
    if (savePump) {
      const items = await ItemModel.insertMany(ItemData.map(item => ({
        ownerId: savePump.ownerId,
        pumpId: savePump._id,
        productName: item.product,
        symbol: item.symbol,
        unit: item.unit,
        type: item.type,
      })));
      return res
        .status(200)
        .json({ code: 200, msg: "Pumps Added successfully" });
    } else {
      return res
        .status(200)
        .json({ code: 404, msg: "Something Went Wrong" });
    }
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ code: 500, msg: err.message });
  }
};
module.exports = {
  getPumps,
  getPumpsName,
  addPump,
};
