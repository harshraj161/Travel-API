const Booking=require("../Model/BookingSchema")


//Add  Booking

exports.addBooking=async(req,res)=>{
    try {
        let result=await Booking.create(req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}


//All Booking

exports.allBooking=async(req,res)=>{
    try {
        let result= await Booking.find()
        .populate("VehicleId",)
        .populate("CustomerId","CustomerName CustomerMobNo CustomerPassWord")
         
        res.status(200).json(result)
    } catch (error) {
       res.status(500).json(error) 
    }
}

// Delete Booking

exports.DeleteByBooking=async(req,res)=>{
    try {
      let result =await Booking.findByIdAndDelete({_id:req.body.bookingid}) 
      res.status(200).json(result) 
    } catch (error) {
        res.status(500).json(error)
    }
}

// Update Booking
exports.updateBookingStatus=async(req,res)=>{
    try {
      const UpdateResult= await Booking.findByIdAndUpdate(req.body.bookingid,
        {
            BookingStatus:req.body.BookingStatus
        },
        {new:true})
        res.status(200).json(UpdateResult)  
    } catch (error) {
        console.log(error)
        res.status(500).json(error)

        
    }
}