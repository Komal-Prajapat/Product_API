import express  from "express";
import { addproduct, deleteProduct, getproduct, updateProduct } from "../Controllers/products.js";
import { auth } from "../middlewares/Auth.js";
export const productRoute = express.Router();

// productRoute.post('/addproduct', auth ,addproduct);
// productRoute.get('/allproduct',auth,getproduct);
// productRoute.put('/update/:id',auth,updateProduct);
// productRoute.delete('/delete/:id',auth,deleteProduct);


productRoute.post('/addproduct' ,addproduct);
productRoute.get('/allproduct',getproduct);
productRoute.put('/update/:id',updateProduct);
productRoute.delete('/delete/:id',deleteProduct);