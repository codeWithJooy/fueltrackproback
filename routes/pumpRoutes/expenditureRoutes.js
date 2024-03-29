const express=require("express")
const router=express.Router()

const expenditureController=require("../../controller/pumpNozel/pumpExpenditureController")

router.post("/addExpenditureType",expenditureController.addExpenditureType)
router.post("/addPumpExpenditure",expenditureController.addPumpExpenditure)
router.post("/getExpenditureType",expenditureController.getExpenditureType)
router.post("/getPumpExpenditure",expenditureController.getPumpExpenditure)
router.post("/getPumpExpenditureRange",expenditureController.getPumpExpenditureRange)
module.exports=router