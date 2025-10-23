const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
username: {
type : String,
},
email:
{
type: String,
} ,
password: {
type : String
},
role : {
type : String,
enum : ["admin","user"],
default : "user"
}
});


const User =  mongoose.model("User", userSchema);
module.exports = User;