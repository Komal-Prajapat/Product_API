import express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import { productRoute } from "./route/products.js";
import bodyParser from "body-parser";
import { UserRoute } from "./route/user.js";
const app = express();



app.use
(bodyParser.json());
// bd connect 
mongoose.connect("mongodb+srv://komalprajapat267:1SqXaaRyOH1STqSt@komal.fjcbbzw.mongodb.net/",{
    dbName:"Product_API"
}).then(()=>console.log("**** DB is connected ***"))

//Route 

app.use("/api",productRoute)
app.use("/api" , UserRoute)
// server
// const port = process.env.PORT;
 const port = 9030;

app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`)
})