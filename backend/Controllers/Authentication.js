const User = require("../Model/Auth");
const bcrypt = require("bcrypt");
const {generateToken} = require("../Middlewares/Auth");
const {loginSchema , signupSchema} =require("../Validation/Schema");


module.exports.LoginUser = async(req, res) =>  { 

const { error, value } = loginSchema.validate(req.body);
if (error) {
return res.status(400).json({ message: error.details[0].message });
}

const {email , password} = value;

try{
const user = await User.findOne({email});

if(!user)
{
return res.status(401).json({message : "Account is not Registered!"})    
}
const isMatch = await bcrypt.compare(password,user.password);
if(!isMatch)
{
return res.status(401).json({message :"Invalid password"});    
}

const payload = {
id : user.id,
email : user.email,
role : user.role 
}

const token = generateToken(payload);

res.cookie("token",token,{
httpOnly : true,
secure : true,
sameSite : "none",
maxAge : 24* 60 * 60 * 1000,
})

res.status(201).json({message : "Login Successfully",payload})
}
catch(err)
{
console.log(err);
}
}

module.exports.RegisterUser = async(req,res) =>
{
const {error,value} = signupSchema.validate(req.body); // yeh humne scehma validation ke liye bnaya ha //
if(error)
{
return res.status(400).json({message : error.details[0].message});   
}

const {username ,email, password,role } = value; // firstly we extract the data from the body //

if (!username || !email || !password) {
return res.status(400).json({ message: "All fields are required" });
}

const existinguser = await User.findOne({email}); // agr email same ha to bhai incrreact emial yeh password daalo
if(existinguser)
{
res.status(401).json({message :"Incorrect Email and Password "});    
return
}

const hashedpassword = await bcrypt.hash(password,4); // yeh apne pass word 4 ankho ka kr diya or encrypt ktr diya\ 

const register = new User({
username,
email,
password : hashedpassword,
role : role || "user"
}) 

await register.save(); // yeh data send ho gya //

const payload = { // payload krke humne ek object bnaya ha jisme id , email , role dalenge jo token generate krne mai help krega behalf of email
id : register.id,
email : register.email,
role : register.role,
}
const token = generateToken(payload)
res.status(201).json({response : register,token:token});
}