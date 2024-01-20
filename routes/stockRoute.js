const express=require("express")
const router=express.Router()

const stockController=require("../controller/stockController")

router.post("/getTanks",stockController.getTanks)
router.post("/addTank",stockController.addTank)

module.exports=router