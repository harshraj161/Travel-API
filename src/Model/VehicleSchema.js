const mongoose = require("mongoose")

const VehicleSchema = mongoose.Schema({

    VehicleNo: String,
    VehicleType: String,
    VehicleBrand: String,
    VehicleImage: String,
    VehicleRent: Number,
    AgencyId: { type: mongoose.Schema.Types.ObjectId, ref: "Agency" },
    IsAvailable: Boolean
})

module.exports = mongoose.model("Vehicle", VehicleSchema)