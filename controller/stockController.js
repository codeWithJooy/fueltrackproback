const Tank = require("../models/tanks");

const getTanks = async (req, res) => {
    try {
        const { ownerId, pumpId } = req.body;

        const tanks = await Tank.find({ ownerId, pumpId });
        res.status(200).json({code:200 ,model:tanks });
    } catch (error) {
        res.status(500).json({ code:500,msg:error.message });
    }
};

const addTank = async (req, res) => {
    try {
        const { ownerId, pumpId, tankName, product, quantity } = req.body;
        const newTank = new Tank({
            ownerId,
            pumpId,
            tankName,
            product,
            quantity
        });

        const savedTank = await newTank.save();
        res.json({ code:200,tank: savedTank });
    } catch (error) {
        res.status(500).json({ error: "Error adding tank" });
    }
};

module.exports = {
    getTanks,
    addTank,
};
