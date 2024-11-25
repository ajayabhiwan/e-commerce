const express = require("express");
require("./db/conn");
const app = express();
const cors = require("cors");
app.use(cors());
const crudroute = require("./routes/crudRoute");

app.use("/",crudroute);

app.listen(5000,()=>{
    console.log("server started : http:127.0.0.1:5000");
})