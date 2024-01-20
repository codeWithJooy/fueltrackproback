const express=require("express")
const router=express.Router()

const stockController=require("../controller/stockController")

router.post("/getTanks",stockController.getTanks)
router.post("/addTank",stockController.addTank)
router.post("/getTankByProduct",stockController.getTankByProduct)
router.post("/getNozels",stockController.getNozels)
router.post("/addNozel",stockController.addNozel)

module.exports=router