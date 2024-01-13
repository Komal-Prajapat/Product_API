import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    quentity:{
        type:Number
    },
    price:{
        type:String
    },
    InStok:{
        type:Boolean
    }
})
export const Product = mongoose.model("product",productSchema);