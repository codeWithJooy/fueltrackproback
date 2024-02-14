const express=require("express")
const router=express.Router()
const partyController=require("../../controller/pumpNozel/pumpPartyController") 

router.post("/getPartyName",partyController.getPartyName)
router.post("/addPartyVehicle",partyController.addPartyVehicle)
router.post("/getPartyVehicle",partyController.getPartyVehicle)

module.exports=router

