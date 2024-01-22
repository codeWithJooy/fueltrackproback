const express=require("express")
const router=express.Router()

const ledgerController=require("../controller/ledgerController") 

router.post("/getLedger",ledgerController.getLedger);
router.post("/addLedger",ledgerController.addLedger);

module.exports=router