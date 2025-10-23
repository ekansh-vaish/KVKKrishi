const mongoose = require("mongoose");

const querySchema = new mongoose.Schema(
    {
    Name : 
    {
    type : String,    
    },
    Email : 
    {
    type : String,    
    },
    Phone: 
    {
    type : Number,    
    },    
    Subject : 
    {
    type : String    
    },
    Message :
    {
    type : String    
    }
    }
)

const Query = mongoose.model("Queries",querySchema);

module.exports = Query;