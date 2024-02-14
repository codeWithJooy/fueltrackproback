const mongoose=require("mongoose");

const pumpExpenditureTypeSchema=new mongoose.Schema(
    {
        pumpId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
        },
        expenditureType:{
            type:String,
            required:true,
        },
    },
    {
        timestamps:true,
    }
);

const ExpenditureTypeModel=mongoose.model("ExpenditureTypeModel", pumpExpenditureTypeSchema);

module.exports=ExpenditureTypeModel;