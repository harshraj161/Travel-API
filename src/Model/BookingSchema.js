const mongoose=require("mongoose")


const BookingSchema=mongoose.Schema({
    BookingDate:{ type: Date, default: new Date() } ,
    StartDate:Date,
    EndDate:Date,
    BookingStatus:{ type: String, default: "Pending" },
    VehicleId:{ type: mongoose.Schema.Types.ObjectId, ref: "Vehicle" },
    CustomerId:{ type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
})

module.exports=mongoose.model("Booking",BookingSchema)