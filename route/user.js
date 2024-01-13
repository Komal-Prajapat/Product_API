import express  from "express";
import { adduser, login } from "../Controllers/user.js";
// import { User } from "../Model/user.js";
export  const  UserRoute = express.Router();
UserRoute.post('/adduser', adduser);
UserRoute.post('/login',login)