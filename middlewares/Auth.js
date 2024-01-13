import { User } from "../Model/user.js";
import jwt from "jsonwebtoken";

export const auth = async(req,res,next)=>{
    try{
        const token = req.header("auth");
        if(!token) return res.json({message :"login First"});
        const decoded = jwt.verify(token , "!@#$%^&*()_+");
        const id = decoded.userID;
        let user = await User.findById(id);
        if(!user) return res.json({message:"user not Found"});
        req.user = user ; 
        next();

    }
    catch(e){
        {
            if(e.name == "TokenExpiredError")return res.json({message:"Token Expored Please Login"})
            res.json({message:"Internal Sever Error ..."});
          }
    }
}