const mongoose=require("mongoose");

const pumpExpenditureSchema=new mongoose.Schema(
    {
        pumpId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
        },
        expenditureType:{
            type:String,
            required:true,
        },
        details:{
            type:String,
            required:true,
        },
        amount:{
            type:String,
            required:true,
        }
    },
    {
        timestamps:true,
    }
);

const ExpenditureModel=mongoose.model("ExpenditureModel", pumpExpenditureSchema);

module.exports=ExpenditureModel;