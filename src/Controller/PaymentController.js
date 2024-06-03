const Payment =require("../Model/PaymentSchema")

// Add Payment

exports.addPayment=async(req,res)=>{
    try {
     let result= await Payment.create(req.body)
     res.status(200).json(result)    
    } catch (error) {
        res.status(500).json(error)
    }
}

// All Payment

exports.allPayment=async(req,res)=>{
    try {
     let result= await Payment.find()
     res.status(200).json(result)   
    } catch (error) {
       res.status(500).json(error) 
    }
}

// Delete Payment

exports.deleteByPayment=async(req,res)=>{
    try {
      let result= await Payment.findByIdAndDelete({_id:req.body.paymentid}) 
      res.status(200).json(result) 
    } catch (error) {
        res.status(500).json(error)
    }
}



// Update Payment

exports.updatePaymentAmount=async(req,res)=>{
    try {
      const UpdateResult = await Payment.findByIdAndUpdate(req.body.paymentid,
        {
            PaymentAmount:req.body.PaymentAmount
        },
        {new:true}) 
        res.status(200).json(UpdateResult)
    } catch (error) {
        console.log(error)
        res.status(error)
    }
}