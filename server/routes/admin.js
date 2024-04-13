//environment variables
import dotenv from "dotenv";
dotenv.config();

//packages
import express from "express";
const router = express.Router();
import Post from "../models/post.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

//middleware for checking authorization levels
const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if(!token){
    return res.status(401).json( { message: "Unathorized access" } );
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json( { message: "Unathorized access" } );
  }
}

//get
router.get("/", async (req, res) => {
  try {
    const locals = {
      title: "Medium",
    };

    const data = await Post.find();
    res.render("admin/index.ejs", { locals, data });
  } catch (error) {
    console.log(error);
  }
});

// post - sign in
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne( { email } );

    if(!user){
        return res.status(401).json( { message: "Invalid credentials" } );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
        return res.status(401).json( { message: "Invalid credentials" } );
    }

    const token = jwt.sign({userId: user._id}, jwtSecret);
    res.cookie("token", token, { httpOnly: true });
    res.redirect("/home");

  } catch (error) {
    console.log(error);
  }
});

//post - sign up
// router.post("/register", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);

//     try {
//         const user = await User.create({email, password: hashedPassword});
//         res.status(201).json({message: "User created"});
//     } catch (error) {
//         if(error.code === 11000){
//             res.status(409).json({message: "User already in use"})
//         }
//         res.status(500).json({message: "Internal server error"})    
//     }

//   } catch (error) {
//     console.log(error);
//   }
// });

export { authMiddleware };
export default router;
