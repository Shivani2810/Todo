const express= require ("express");
const app=express();


require("dotenv").config();
const PORT=process.env.PORT || 4000;

app.listen(3000,()=>{
    console.log("App is running at port 8000");
})

