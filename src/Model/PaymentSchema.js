const mongoose=require("mongoose")

const PaymentSchema=mongoose.Schema({
    
    PaymentDate:Date,
    PaymentStatus:{ type: String, default: "Pending" },
    PaymentMode:"string",
    PaymentAmount:Number,
    BookingId:{type:mongoose.Schema.Types.ObjectId,ref:"Booking"}

})
 
module.exports=mongoose.model("Payment",PaymentSchema)