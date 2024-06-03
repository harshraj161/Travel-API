// Server .js

const express =require("express")
const Bodyparser=require("body-parser")
const mongoose =require("mongoose")
const bodyParser = require("body-parser")
const multer=require("multer")
const path= require("path")
const cors= require("cors")

//create server
const Server=express()   //first step

Server.use(bodyParser.json())
Server.use(cors())


//conection to DB
mongoose.connect("mongodb://127.0.0.1:27017/dbtravel",{     
    UseNewUrlParser:true
}).then((result) => {
    console.log("DB Connected")
}).catch((err) => {
    console.log("DB Not Connected")
});


const fileStorageConfig = multer.diskStorage({
    destination: "Uploades",
    filename: (req, file, cb) => {
       cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
 })
 
 const fileUploadingConfig = multer({
    storage: fileStorageConfig,
    fileFilter(req, file, cb) {
       if (!file.originalname.match(/\.(png|jpg|jpeg|pdf)$/)) {
          return cb(new Error("Please Upload Correct File"))
       }
       cb(undefined, true)
    }
 })
 
 Server.post("/uploadfile",
 
    fileUploadingConfig.single('image'), (req, res) => {
       res.status(200).json({
          filepath: "/images/".concat(req.file.filename),
          uploaded: true
       })
 
    },
 
    (err, req, res, next) => {
       res.status(400).send({ error: err.message })
    }
 
 )
 
 
 

Server.get("/",(req,res)=>{    //step 3 
    res.send("manjulika")
})  

// Routes Attchment
Server.use("/api/", require("./src/Routes/Routes"))

//upload images 
Server.use(express.static("Uploades"))
Server.use("/images",express.static("Uploades"))



Server.listen(5000,()=>{
    console.log("Server Started")     ///step 2
})