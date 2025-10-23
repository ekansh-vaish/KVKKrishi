const Jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtAuthMiddleware = (req,res,next) =>
 {


   const token = req.cookies.token; // yeh hum send kiya ha cookie mai token

      if(!token)
      {
      return res.status(401).json({message : "No token found"}) ; 
      }
    try {
    const decoded =  Jwt.verify(token,process.env.JWT_SECRET); // yeh verify krega ki token shi ha yeh galat
    req.user = decoded
    next();
    } catch (error) {
        console.log(error);

res.status(401).json({error : "Invalid token"});        
    }
}

const generateToken = (userData) =>
{
return Jwt.sign(userData,process.env.JWT_SECRET)     // yeh token generte kr rha
}

module.exports = {jwtAuthMiddleware,generateToken};