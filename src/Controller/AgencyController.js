const Agency = require("../Model/AgencySchema")


// Add Agency
exports.addAgency=async(req,res)=>{
    try {
        let result= await Agency.create(req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }

}

// All Agency

exports.allAgency=async(req,res)=>{
    try {
        let result= await Agency.find()
        res.status(200).json(result)
    } catch (error) {
       res.status(500).json(error) 
    }
}

//  Delete Agency

exports.DeleteByAgency =async(req,res)=>{
    try {
       let result = await Agency.findByIdAndDelete({_id:req.body.agencyid}) 
       res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

// Update Agency

exports.updateAgencyPassWord=async(req,res)=>{
    try {
        const UpdateResult= await Agency.findByIdAndUpdate(req.body.agencyid,
            {
                AgencyPassWord:req.body.AgencyPassWord
            },
            {new:true})
            res.status(200).json(UpdateResult)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}