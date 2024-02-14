const Tank = require("../models/tanks");
const Nozel=require("../models/Nozel");
const NoFuel=require("../models/noFuel");
const PumpNozelClosing=require("../models/pumpNozel/pumpNozelClosing")

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
const getTankByProduct = async (req, res) => {
    try {
        const { ownerId, pumpId, product = "" } = req.body;

        const query = { ownerId, pumpId };
        if (product) {
            query.product = product;
        }

        const tanks = await Tank.find(query, { tankName: 1, _id: 1 });

        res.status(200).json({ code: 200, model: tanks.map(({ tankName, _id }) => ({ tankName, _id })) });
    } catch (error) {
        res.status(500).json({ code: 500, msg: `Error fetching tanks by product: ${error.message}` });
    }
};
const getNozels = async (req, res) => {
    try {
        const { ownerId, pumpId } = req.body;
        console.log(pumpId)
        const nozels = await Nozel.find({ ownerId, pumpId });
        res.status(200).json({code:200 ,model:nozels });
    } catch (error) {
        res.status(500).json({ code:500,msg:error.message });
    }
};
const addNozel = async (req, res) => {
    try {
        const { ownerId, pumpId, nozelName, product,mpd, tank,closingReading } = req.body;
        const newNozel = new Nozel({
            ownerId,
            pumpId,
            nozelName,
            product,
            mpd,
            tank,
            closingMeter:closingReading
        });

        const savedNozel = await newNozel.save();

        res.json({ code:200,nozel: savedNozel });
    } catch (error) {
        res.status(500).json({ error: "Error adding Nozel" });
    }
};
const getNoFuel = async (req, res) => {
    try {
        const { ownerId, pumpId } = req.body;

        const noFuel = await NoFuel.find({ ownerId, pumpId });
        res.status(200).json({code:200 ,model:noFuel });
    } catch (error) {
        res.status(500).json({ code:500,msg:error.message });
    }
};
const addNoFuel = async (req, res) => {
    try {
        const { ownerId, pumpId, productName,size,quantity} = req.body;
        const noFuelData=new NoFuel({
            ownerId,
            pumpId,
            productName,
            size,
            quantity,
        })

        const savedNoFuel = await noFuelData.save();
        if(savedNoFuel){
            return res.json({code:200,model:savedNoFuel})
        }
        else{
            return res.json({code:400,msg:"Something Went Wrong"})
        }
    } catch (error) {
        res.status(500).json({ code:500,msg:error.message});
    }
};
module.exports = {
    getTanks,
    addTank,
    getTankByProduct,
    getNozels,
    addNozel,
    addNoFuel,
    getNoFuel,
};
