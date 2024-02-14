const express=require("express")
const router=express.Router()
const partyController=require("../../controller/pumpNozel/pumpPartyController") 

router.post("/getPartyName",partyController.getPartyName)
router.post("/addPartyVehicle",partyController.addPartyVehicle)
router.post("/getPartyVehicle",partyController.getPartyVehicle)
router.post("/addPartySales",partyController.addPartySales)
router.post("/getPartySales",partyController.getPartySales)

module.exports=router

