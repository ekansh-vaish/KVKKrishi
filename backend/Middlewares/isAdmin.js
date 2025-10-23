const isAdmin = (req,res,next) =>
{
if(req.user && req.user.role === "admin")
{
next();    
}    
else{
res.status(403).json({
success : false,
message : "Unauthorised Access Admin Only", 
})   ;
}
}

const isUser = (req,res,next) =>
{
if(req.user && req.user.role === "user")
{
next();    
}    
else{
res.status(403).json({
success : false,
message : "Unauthorised Access"
})   
}
}


module.exports = {isAdmin,isUser};