const Vehicle = require("../Model/VehicleSchema")

//Add Vehicle

exports.addVehicle = async (req, res) => {
    try {
        let result = await Vehicle.create(req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

// All Vehicle

exports.allVehicle = async (req, res) => {
    try {
        let result = await Vehicle.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}


// Delete Vehicle

exports.DeleteByVehicle = async (req, res) => {
    try {
        let result = await Vehicle.findByIdAndDelete({ _id: req.body.vehicleid })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}


// Update Vehicle

exports.updateVehicleRent = async (req, res) => {
    try {
        const UpdateResult = await Vehicle.findByIdAndUpdate(req.body.vehicleid,
            {
                VehicleRent: req.body.VehicleRent
            },
            { new: true })
        res.status(200).json(UpdateResult)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}


// using where controller


exports.getVehiclebyBrands = async (req, res) => {
    try {
        const brandData = await Vehicle.find()
            .where("VehicleBrand")
            .eq(req.body.VehicleBrand)
        res.status(200).json(brandData)
    } catch (error) {
        res.status(500).json(error)

    }
}