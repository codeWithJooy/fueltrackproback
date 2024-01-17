const Pump = require("../models/pumps");
const User = require("../models/user");

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

module.exports = {
    setPumps,
};
