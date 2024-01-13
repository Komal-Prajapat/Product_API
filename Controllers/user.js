import { User } from "../Model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const adduser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.json({ user: newUser });
  } catch (error) {
    console.error(error);
  }
};


//Login

export const login = async(req,res)=>{
    const{ email ,password} = req.body;
    let user =await User.findOne({email});
    if(!user)
    return res.json({message:"User not Exist"})

    const valid_password = await bcrypt.compare(password, user.password);
    if (!valid_password) return res.json({ message: " invalid ....." });
  
    const token = jwt.sign({ userID: user.id }, "!@#$%^&*()_+", {
      expiresIn: "1d",
    });
    res.json({token });
  
}

