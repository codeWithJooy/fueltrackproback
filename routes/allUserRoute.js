const express=require("express")
const router=express.Router()
const userController=require("../controller/allusersController")

router.get("/getAllUsers",userController.getAllUsers)

module.exports=router