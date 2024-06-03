const mongoose=require("mongoose")


const CustomerSchema=mongoose.Schema({
    CustomerName:String,
    CustomerEmail:String,
    CustomerMobNo:Number,
    CustomerPassWord:String,
    CustomerAddress:String,
    CustomerCity:String,
    IsBlock:Boolean
})

module.exports=mongoose.model("Customer",CustomerSchema)