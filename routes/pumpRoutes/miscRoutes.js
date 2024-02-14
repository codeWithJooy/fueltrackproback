const express=require("express")
const router=express.Router() 
const miscController=require("../../controller/pumpNozel/pumpMiscController")

router.post("/getPumpName",miscController.getPumpName)

module.exports=router