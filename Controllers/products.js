import { Product } from "../Model/product.js";

export const addproduct = async(req,res)=>{
    try {
        const{Name , quentity,price,InStock} = req.body;
    const product = await Product.create({
        Name,quentity,price,InStock
    });
   
    
    res.json({product});
    } catch (error) {
        console.log(error)
    }
}

export const getproduct = async(req,res)=>{
   try {
    // const {Name , quentity , price , InStock} =req.body;
    const product = await Product.find()
    if(!product ){
        res.json("Product Not Found");
    } 
   else{
    res.json({product});
   }
   } catch (error) {
    console.log(error);
   }
}
//  *********** Update Product **********
export const  updateProduct = async(req,res)=>{
  try {
    const id = req.params.id;
    const {Name , quentity , price , InStock} =req.body;
  
    const product = await Product.findById(id);
    if(!product) return res.json({message:"Invaild Id"});
    product.Name = Name,
    product.quentity = quentity,
    product.price = price,
    product.InStok = InStock
    product.save();
    res.json({message:"Data Updated" , product})
  } catch (error) {
    console.log(error);
    res.json({error})
  }
} 


//  ********** Delete Product****

export const deleteProduct = async(req,res)=>{
    try {
        const id = req.params.id;
    const product = await Product.findById(id);
    if(!product){
        res.json({message:"Invild Id"})
    }
    product.deleteOne();
    res.json({message:"******** Product Deleted ******** "});
    } catch (error) {
      console.log(error)  
    }
} 
