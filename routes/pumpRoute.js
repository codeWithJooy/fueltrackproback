const express=require("express")
const router=express.Router()
const pumpController=require("../controller/pumpController")

router.post("/getAllPumps",pumpController.getPumps)

module.exports = router