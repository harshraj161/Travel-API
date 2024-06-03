const express = require("express")
const router = express.Router()


// Customer//

const CustomerController = require("../Controller/CustomerController")

router.post("/addcustomers", CustomerController.addCustomer)
router.get("/allcustomers", CustomerController.allCustomer)
router.delete("/deletebyCustomers", CustomerController.deleteByCustomer)
router.put("/updatepasswords", CustomerController.updatePassWord)
router.post("/dologin",CustomerController.doLogin)

//Agency//

const AgencyController= require("../Controller/AgencyController")


router.post("/addagency",AgencyController.addAgency)
router.get("/allagency",AgencyController.allAgency)
router.delete("/deletebyagency",AgencyController.DeleteByAgency)
router.put("/updateagencypassword",AgencyController.updateAgencyPassWord)

//Vehicle//

const VehicleController=require("../Controller/VehicleController")

router.post("/addvehicle",VehicleController.addVehicle)
router.get("/allvehicle",VehicleController.allVehicle)
router.delete("/deletebyvehicle",VehicleController.DeleteByVehicle)
router.put("/updatevehiclerent",VehicleController.updateVehicleRent)
router.post("/getvehiclebybrands",VehicleController.getVehiclebyBrands)


// Booking

const BookingController=require("../Controller/BookingController")
router.post("/addbooking",BookingController.addBooking)
router.get("/allbooking",BookingController.allBooking)
router.delete("/deletebybooking",BookingController.DeleteByBooking)
router.put("/updatebookingstatus",BookingController.updateBookingStatus)


// Payment

const PaymentController=require("../Controller/PaymentController")

router.post("/addPayment",PaymentController.addPayment)
router.get("/allpayment",PaymentController.allPayment)
router.delete("/deletebypayment",PaymentController.deleteByPayment)
router.put("/updatepaymentamount",PaymentController.updatePaymentAmount)

//Contact

const ContactController= require("../Controller/ContactController")

router.post("/addcontact",ContactController.addContact)
router.get("/allcontact",ContactController.allContact)
router.delete("/deletebycontact",ContactController.deleteByContact)




module.exports = router