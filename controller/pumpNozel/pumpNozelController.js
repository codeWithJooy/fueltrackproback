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
const addNozelReading = async (req, res) => {
  try {
    const {
      pumpId,
      nozelId,
      nozelName,
      date,
      openingMeter,
      closingMeter,
      testing,
      additionalOut,
      additionalIn,
      netSales,
      salesDsr,
      salesDiff,
    } = req.body;
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
    return res
      .status(200)
      .json({
        code: 200,
        msg: "Nozel reading added successfully",
        data: savedNozel,
      });
  } catch (error) {
    return res.status(500).json({ code: 500, msg: error.message });
  }
};

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
    const { pumpId} = req.body;
    const nozelSale = await PumpNozel.find({ pumpId});
    return res.json({ code: 200, model: nozelSale });
  } catch (error) {
    return res.status(500).json({ code: 500, msg: error.message });
  }
};
module.exports = {
  getNozelsByPumpId,
  addNozelReading,
  getPumpNozelClosingMeter,
  getPumpNozelSale,
};
