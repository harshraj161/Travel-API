const mongoose=require("mongoose")

const ContactSchema=mongoose.Schema({
    FirstName:String,
    LastName:String,
    Email:String,
    Message:String
})

module.exports=mongoose.model("Contact",ContactSchema)