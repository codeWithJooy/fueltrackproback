const express=require("express")
const router=express.Router()
const setupController=require("../controller/setupController")

router.post("/pumpsetup",setupController.setPumps)

module.exports = router