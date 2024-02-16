const ExpenditureModel=require("../../models/pumpNozel/pumpExpenditure")
const ExpenditureTypeModel=require("../../models/pumpNozel/pumpExpenditureType")

const addPumpExpenditure=async(req,res)=>{
    try{
       const {pumpId,date,expenditureType,details,amount}=req.body
       let newExpenditure=new ExpenditureModel({
        pumpId,
        date,
        expenditureType,
        details,
        amount
       })

       const saveExpenditure=newExpenditure.save()
       return res.json({code:200,model:saveExpenditure})
    }
    catch(error){
       return res.status(500).json({code:500,msg:error.message})
    }
}
const getPumpExpenditure=async(req,res)=>{
    try{
      const {pumpId,date}=req.body
      let query={pumpId,date}
      
      let expenditureData=await ExpenditureModel.find(query)
      if(expenditureData){
        return res.json({code:200,model:expenditureData})
      }
      else{
        return res.json({code:200,model:[]})
      }
    }
    catch(error){
      return res.status(500).json({code:500,msg:error.message})
    }
  }
  const addExpenditureType=async(req,res)=>{
    try{
       const {pumpId,expenditureType}=req.body
       let newExpenditure=new ExpenditureTypeModel({
        pumpId,
        expenditureType,
       })

       const saveExpenditure=newExpenditure.save()
       return res.json({code:200,model:saveExpenditure})
    }
    catch(error){
       return res.status(500).json({code:500,msg:error.message})
    }
}
const getExpenditureType=async(req,res)=>{
    try{
      const {pumpId}=req.body
      let query={pumpId}
      
      let expenditureData=await ExpenditureTypeModel.find(query)
      if(expenditureData){
        return res.json({code:200,model:expenditureData})
      }
      else{
        return res.json({code:200,model:[]})
      }
    }
    catch(error){
      return res.status(500).json({code:500,msg:error.message})
    }
  }
module.exports={
    addPumpExpenditure,
    addExpenditureType,
    getExpenditureType,
    getPumpExpenditure,

}