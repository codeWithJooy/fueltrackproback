const express=require("express")
const router=express.Router()
const purchaseController=require("../../controller/pumpNozel/pumpPurchaseController")

router.post("/addPumpPurchase",purchaseController.addPumpPurchase)
router.post("/getPumpPurchase",purchaseController.getPumpPurchase)

module.exports=router