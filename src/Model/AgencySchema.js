const mongoose=require("mongoose")

const AgencySchema=mongoose.Schema({
    AgencyName:String,
    AgencyAddress:String,
    AgencyCity:String,
    AgencyOwnerName:String,
    AgencyContactNum:Number,
    AgencyLogo:String,
    AgencyEmail:String,
    AgencyPassWord:String,
})

module.exports=mongoose.model("Agency",AgencySchema)