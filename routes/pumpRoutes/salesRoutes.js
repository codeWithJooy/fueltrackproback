const express=require("express")
const router=express.Router()
const pumpNozelController=require("../../controller/pumpNozel/pumpNozelController")
const pumpOtherController=require("../../controller/pumpNozel/pumpOtherController")

router.post("/getNozelByPumpId",pumpNozelController.getNozelsByPumpId)
router.post("/addNozelReading",pumpNozelController.addNozelReading)
router.post("/addNozelReadingFinal",pumpNozelController.addNozelReadingFinal)
router.post("/getPumpNozelClosingMeter",pumpNozelController.getPumpNozelClosingMeter)
router.post("/getPumpNozelSale",pumpNozelController.getPumpNozelSale)
router.post("/getNozelData",pumpNozelController.getNozelData)
router.post("/getNozelReading",pumpNozelController.getNozelReading)
router.post("/getNozelReadingRange",pumpNozelController.getNozelReadingRange)

router.post("/addOtherSale",pumpOtherController.addOtherSale)
router.post("/getOtherSale",pumpOtherController.getOtherSale)
router.post("/getAllProducts",pumpOtherController.getAllProducts)

module.exports=router