const express = require("express");
const crudroute = express();


const crudController = require("../controllers/crudController")
const multer = require("multer");
const path = require("path")
crudroute.use(express.json());
crudroute.use(express.urlencoded({extended:true}));

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,path.join(__dirname,"../public/images"))
    },
    filename: (req,file,cb)=>{
        const name = Date.now()+file.originalname
        cb(null,name);
    }
});

const upload = multer({storage:storage});
crudroute.use("/public",express.static('./public/images'));

crudroute.post("/postdata",upload.single('image'),crudController.insertuser);
crudroute.get("/getalldata",crudController.getalldata);
crudroute.get("/getdata/:id",crudController.getuserdata);
crudroute.put("/updatedata/:id",upload.single('image'),crudController.updatedonedata);
crudroute.delete("/deletedata/:id",crudController.deleteonedata);




module.exports = crudroute;

