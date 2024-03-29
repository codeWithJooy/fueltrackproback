const express=require("express")
const router=express.Router()
const setupController=require("../controller/setupController")

router.post("/pumpsetup",setupController.setPumps)
router.post("/addItem",setupController.addItems)
router.post("/getItem",setupController.getItems)
router.post("/getItemRate",setupController.getItemRate)
router.post("/addItemRate",setupController.addItemRate)
router.post("/getOneItemRate",setupController.getOneItemRate)

module.exports = router