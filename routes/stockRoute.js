const express=require("express")
const router=express.Router()

const stockController=require("../controller/stockController")

router.post("/getTanks",stockController.getTanks)
router.post("/addTank",stockController.addTank)
router.post("/getTankByProduct",stockController.getTankByProduct)
router.post("/getNozels",stockController.getNozels)
router.post("/addNozel",stockController.addNozel)
router.post("/getNoFuel",stockController.getNoFuel)
router.post("/addNoFuel",stockController.addNoFuel)

module.exports=router