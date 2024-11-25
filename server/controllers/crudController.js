const crud = require("../model/crudModel");

const insertuser = async (req,res)=>{

    const {name , age , email , password } = req.body
    console.log("rebody value",req.body);

    const image = req.file.filename;

    if(name || age || email || password || image){
        console.log("please fill up the all detail properly");
    }
    try {
        const preuser = await crud.findOne({email:email});
        console.log("preuser detail ----",preuser);
        if(preuser){
            res.send("your emailid is already registered");
        } else{
            const newuser = new crud({
                name:name , age:age , image:image , password:password , email:email
            });
            console.log("newuser detail ----",newuser);

            const result = await newuser.save();
            console.log("result details ---",result);
            res.send(result);
        }
    } catch (error) {
        console.log(error.message)
    }
}

const getalldata = async(req,res)=>{
    
    try {
        const getdata = await crud.find({});
        console.log("getdata detail ---",getdata);
        res.send(getdata)
       
    } catch (error) {
        console.log(error.message);
    }
}

const getuserdata = async(req,res)=>{
    try {
        const email = req.params.id
        const getdataone = await crud.findOne({email:email});
        console.log("getdataone details---",getdataone);
        res.send(getdataone);
    } catch (error) {
        console.log(error.message)
    }
}

const updatedonedata = async(req,res)=>{
    try {
       const emails = req.params.id
       console.log("emails updatedetail----",emails)
       
       const {name , age , password  } = req.body
       console.log("updateddata detail reqbody--",req.body);
       const image = req.file.filename
       const updateddata = await crud.updateOne({email:emails},{$set:{name:name, age:age,   password:password  ,image:image}});
       console.log("updatedata details ----",updateddata);
       res.send(updateddata);
    } catch (error) {
        console.log(error.message)
    }
}

const deleteonedata = async(req,res)=>{
    try {
        const email = req.params.id
        const deletedata = await crud.deleteOne({email:email});
        console.log("deletedata details -----",deletedata)
        res.send("data should be deleted successfully");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
   insertuser,
   getalldata,
   getuserdata,
updatedonedata,
deleteonedata
}