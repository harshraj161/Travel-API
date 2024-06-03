const Customer = require("../Model/CustomerSchema")


//Add Customer

exports.addCustomer = async (req, res) => {
    try {
        let result = await Customer.create(req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

// // All Customer

exports.allCustomer = async (req, res) => {
    try {
        let result = await Customer.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}


// // Delete Customer

exports.deleteByCustomer = async (req, res) => {
    try {
        let result = await Customer.findByIdAndDelete({ _id: req.body.customerid })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

// Customer Update

exports.updatePassWord = async (req, res) => {
    try {
        const UpdateResult = await Customer.findByIdAndUpdate(req.body.customerid,
            {

                CustomerPassWord: req.body.CustomerPassWord

            },
            {new:true})
            res.status(200).json(UpdateResult)
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
}

// Do Login

exports.doLogin = async (req, res) => {
    try {
        const result = await Customer.findOne(req.body)
        if (!result) {
            const resData = {
                message: "Login Fail",
                data: result
            }
            res.status(200).json(resData)
        } else {
            const resData = {
                message: "Login Succesful",
                data: result
            }
            res.status(200).json(resData)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}