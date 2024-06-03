const Contact =require("../Model/ContactSchema")


//Add Contact

exports.addContact= async(req,res)=>{
    try {
     let result = await Contact.create(req.body)
     res.status(200).json(result)  
    } catch (error) {
        res.status(500).json(error)
    }
}

// All Contact

exports.allContact= async(req,res)=>{
    try {
      let result = await Contact.find() 
      res.status(200).json(result) 
    } catch (error) {
        res.status(500).json(error)
    }
}

// Delete Contact
exports.deleteByContact = async (req, res) => {
    try {
        let result = await Contact.findByIdAndDelete({ _id: req.body.contactid })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}